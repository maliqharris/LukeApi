import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";




//form: input  --------> keep track variable change state!!!!
const HeaderForm = () => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState(""); 


    const navigate = useNavigate();

    // after submit, redirect to different routes 
    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate(`/${category}/${id}`) //shows/4    line 18 in app.js 
    }

  return (
    <div>
        {/* HeaderForm */}


        <form onSubmit={handleSubmit}>
            <label>Search for: </label>
            <select  name="category" value = {category }onChange={e=>setCategory(e.target.value)}>
                <option value="people">People</option>
                <option value="shows">Planets</option>
                </select>
            <label>  ID: </label>
            <input type = "number" name= "id" value={id} onChange={e=>setId(e.target.value)} />
            <button type="submit"> Submit</button>

            
        </form>
    </div>
  )
}

export default HeaderForm