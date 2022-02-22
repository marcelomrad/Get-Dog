import React from 'react'
import Spinner from './Spinner/Spinner'

export default function Card ({dog , updateDog, loading}){

    if(loading) return <Spinner/>

    return(
        <div className = "card" onClick = {() => updateDog(dog.breed.id)}>
            <img
                src= {dog.image}
                alt='dog'
            />
            <p>
                {dog.breed.name}
            </p>
           
        </div>
    )
}