import React,{useMemo} from 'react'
import {getHeroByPublisher} from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
export const HeroList = ({publisher}) => {

   const heroes= useMemo(() => getHeroByPublisher(publisher), [publisher]);

    // const heroes = getHeroByPublisher(publisher);
    return (
        <div className="card-column animate__animated animate__bounceInRight">
        
            {

                heroes.map(hero =>(

                   
                    <HeroCard key={hero.id}
                        {...hero}>
                    </HeroCard>
                ))


            }
        
        </div>
    )
}
