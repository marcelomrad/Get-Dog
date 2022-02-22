import React, {useState, useEffect} from 'react'
import getBreeds from '../services/getBreeds';
import Error from './Error';


const initialBreeds = [
    {
       id: 1,
       name: 'Golden' 

    },
    {
       id: 2,
       name: 'Husky' 
    },

];

export default function Select( { updateDog } ){
    const  [breeds, setBreeds] = useState(initialBreeds);
    const [error, setError] = useState(null)

    useEffect(() =>{
        updateBreeds();
    }, []);

    const updateBreeds = () => {
        getBreeds()
            .then((newRacas) => {
                setBreeds(newRacas);
            })
            .catch((error) => {
                console.log(error);
                setError("Error ao carregar as raças")
            })

    }

    return(
        <>
        <select onChange = {(e) => updateDog(e.target.value)}>
            {breeds.map(breed => (
                <option value ={breed.id} key ={breed.id}>{breed.name}</option>
                
            ))}
        </select>
        
        {error && <Error error = {error}/>}
        
        </>
            
    )
}