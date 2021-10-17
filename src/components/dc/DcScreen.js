import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    const divStyle ={
        color:'white',
        background:'#827F7E',
        border: 'solid 1px black',
    }



    return (
        <div style={divStyle}>
            <h1>DC Screen</h1>
            <hr />

            <HeroList publisher={"DC Comics"}/>

        </div>
    )
}
