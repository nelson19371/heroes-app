import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const Marvel = () => {
    const divStyle ={
        color:'white',
        background:'#827F7E',
        border: 'solid 1px black',
    }
    return (
        <div style={divStyle}>
            <h1>Marvel Screen</h1>
            <hr/>
            <HeroList publisher={"Marvel Comics"}/>

        </div>
    )
}
