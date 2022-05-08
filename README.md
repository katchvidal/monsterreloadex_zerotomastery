#   Starting Learning React 2022

```
    npx create-react-app
    in this point we start doing a monster card app with a bar to search with match name

    1.  React with classes
    2.  React with Hooks
    3.  API -> https://jsonplaceholder.typicode.com/users

    Constructor the concepts -> Single Page
    1.  All the Page
        1.1 Field Search Input
        1.2 List of Monsters

    The responsability to the componnents throught ( we can reuse a component in differents part of an application )
    Folder Structure by the Responsability
    1.  Src
        1.1 Componennts Folder -> Componnent encapsulate the responsability
            1.1.1   Card List
            1.1.2   Search Bar

```

##  Multiple Class Names
```
    -   Passing a parameters trought props parameters 
```

##  Handler CSS in React
```
    -   App JS representing the entry point of the entire application -> App JS the only one a unique
    -   App .CSS is the entirily entry proint of css aplication style.
    -   When you import a .CSS in any part of the Componnent be Sure not modify any class in other componnent because the css not isolte an one componnent
```

##  Card Image
```
    -   We recived a image from ->  https://robohash.org/${ monster.id }
```

##  Converting this application using Functional Components & Hooks
```
    -   The most important Change is how React re-render the bundle
    -   componentDidMount not working wit a function component
    -   UseEffects -> Try to Control what happend in the componnent and evit re- render until
        the state change
```


##  Life ciclyng of Component
```
    -   Mount Component:
        When the component are render in the client
    -   Update Component:
        React is charge of show the re render in the client
    -   UnMounting:
        The componnent not necessary in the view
```

##  Upgrade React Dom V17 - V18

```
    - npm update react react-dom --latest
    eg. -> Big Change:
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <AppFunctional />
            </React.StrictMode>
        );
```

##  Re rendering

```
    Why re rendering is a great solution for React
    all the components are in the same level inclusive the card have the same container
    1.  App
        1.1 Search Bar
        1.2 Card List
        1.3 Card One Monster
```
