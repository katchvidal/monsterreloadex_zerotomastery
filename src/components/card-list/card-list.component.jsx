import { Component } from "react"
import CardOneMonster from "./card/card.component"
import Card from "./card/card.component"

/*
class CardList extends Component {
    constructor() {
        super()

        this.state = {
           
        }
    }

    render() {
        const { monsters } = this.props
        return (
            <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    
                    {
                        monsters.map((monster) => ( <CardOneMonster monster = { monster } />))
                    }
              
                </div>
            </>
        )
    }
}*/

import React from 'react'

export const CardList = ({monsters}) => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        
        {
            monsters.map((monster) => ( <CardOneMonster key={monster.id} monster = { monster } />))
        }
  
    </div>
</>
  )
}



export default CardList;