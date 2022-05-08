
//import { Component } from "react"


/*
class CardOneMonster extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        const { monster } = this.props
        const { name, username } = monster
        return (
            <>
                <div className="mt-5">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg p-8" src={ `https://robohash.org/${ name }?set=set4`} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">

                                <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white"> {name} </h3>
                                <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white"> {username} </h3>


                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}*/

import React from 'react'

export const CardOneMonster = ({ monster }) => {
    const { name, username } = monster
  return (
    <div className="mt-5">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg p-8" src={ `https://robohash.org/${ name }?set=set4`} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">

                                <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white"> {name} </h3>
                                <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white"> {username} </h3>


                            </div>
                        </div>
                    </div>
                </div>
  )
}


export default CardOneMonster;