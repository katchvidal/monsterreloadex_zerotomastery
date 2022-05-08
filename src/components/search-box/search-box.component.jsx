import { Component } from "react";
import './search-box.styles.css'

/*
class SearchBox extends Component {

    render() {
        const { onsearchChange } = this.props
        return (
            <>

                <div className="pt-2 relative mx-auto text-gray-600 mb-5">
                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-5 mt-5" type="search" name="search" 
                    placeholder="Search"
                    onChange={onsearchChange}
                     />
                </div>
                
            </>
        )
    }
}

export default SearchBox;*/

import React from 'react'

function searchboxcomponent({ onsearchChange }) {
    return (
        <div className="pt-2 relative mx-auto text-gray-600 mb-5">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-5 mt-5" type="search" name="search"
                placeholder="Search"
                onChange={onsearchChange}
            />
        </div>
    )
}

export default searchboxcomponent;