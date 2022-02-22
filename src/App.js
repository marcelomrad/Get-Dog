import React, {useState, useEffect} from "react"
import Card from "./componentes/Card"
import Select from "./componentes/Select"
import getDog from "./services/getDog"
import Error from "./componentes/Error"

const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: ""
  }
 
}

export default function App() {

  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Error al cargar un perro")
        setLoading(false);
      })
  }
  
  return (
    <div className="app">
      <Select updateDog={updateDog}/>
      
      { error && <Error error={error} /> }

      <Card dog={dog} updateDog={updateDog} loading={loading}/>
    </div>
  );
}

