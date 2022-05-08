import React, { useEffect, useState } from "react";
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";



const AppFunctional = () => {

    const [searchField, setsearchFieldState] = useState('')  //  Setteamos terminimos de busquedas
    const [Monsters, setMonsters] = useState([])    // Capturamos todos los Moustros Fetch
    const [filteredMosnters, setfilteredMosnters] = useState(Monsters)  //  Setteamos el Nuevo Arreglo filtrado con el Termino de Busqueda

    //  Llamada una sola vez a la API
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => { setMonsters(users) })

    }, [])

    //  Si la Api devuelve algo diferente o el Termino de Busqueda cambia 
    useEffect(() => {
        const newFilteredMonsters = Monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
        });
        setfilteredMosnters( newFilteredMonsters )
    }, [ Monsters, searchField ])

    //  Search Box Devuleve un Evento al DOM -> Capturamos y Setteamos
    const onsearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setsearchFieldState(searchFieldString)
    }

    return (
        <>
            <div className="App">

                <h1 className="app-title"> Rolodex </h1>
                <SearchBox onsearchChange={onsearchChange} />
                <CardList monsters={filteredMosnters} />
            </div>
        </>
    )
}

export default AppFunctional;