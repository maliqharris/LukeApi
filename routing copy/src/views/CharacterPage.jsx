import React, {useState, useEffect} from 'react'
import  {useParams } from 'react-router-dom';
import axios from "axios";


const CharacterPage = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState(null);
    const [bad, setBad] = useState(false)


    useEffect(()=>{
       axios.get(`https://swapi.dev/api/people/${id}`) 
        .then(response=>{
            console.log(response.data);
            setCharacter(response.data);
            setBad(false)
    })
        .catch(err=>{
            console.log(err)
            // make appear below
            setBad(true)
            // stop displaying old info
            setCharacter(null)
        })

    }, [id] )
 
  return (
    <div>
        {/* CharacterPage */}
        {
            character?
            <div>
                <h1>{character.name} </h1>
                <h2>Height: {character.height}</h2>
                <h2>Mass: {character.mass}</h2>
                <h2>Hair Color: {character.hair_color}</h2>
                <h2>Skin Color: {character.skin_color}</h2>

                


            </div>:
            <h1>
    
            </h1>
        }
        {
            bad &&
            <div>
             <h1>These are not the Droids youre looking for</h1>
             <img src="https://i.pinimg.com/originals/2f/d1/2b/2fd12b8ce49a9f0bea3b5f82888c14b8.jpg" alt="Obi-Wan Kenobi" />
             </div>
             

            

        }




    </div>
  )
}

export default CharacterPage