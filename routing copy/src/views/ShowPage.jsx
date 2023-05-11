import React, {useState, useEffect} from 'react'
import  {useParams } from 'react-router-dom';
import axios from "axios";




// grab params = useParams
// calling API in load -- useEffect & axios
// variable change after API call -- useState

const ShowPage = () => {
    const {id} = useParams();
    const [planet, setPlanet] = useState(null);
    const [bad, setBad] = useState(false)


    useEffect(()=>{
       axios.get(`https://swapi.dev/api/planets/${id}`) 
        .then(response=>{
            console.log(response.data);
            setPlanet(response.data);
            setBad(false)
    })
        .catch(err=>{
            console.log(err)
            // make appear below
            setBad(true)
            // stop displaying old info
            setPlanet(null)
        })

    }, [id] )
  return (
    <div>
        {
            planet?
            <div>
                <h1>{planet.name} </h1>
                <h2>Climate: {planet.climate}</h2>
                <h2>Terrain: {planet.terrain}</h2>
                <h2>Gravity: {planet.gravity}</h2>
                <h2>Diameter: {planet.diameter}</h2>

                


            </div>:
            <h1></h1>
        }
        {
            bad && <h1>These are not the Droids youre looking for</h1>
            

        }





    </div>
  )
}

export default ShowPage