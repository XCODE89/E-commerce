import { useState } from "react"

import validation from "./validation"

const Register = () => {
const [input, setInput] = useState({
    name :"",
    lastname : "",
    country : "",
    city : "",
    email : "",
    password : "",
    nickname : ""
})

const [errors, setErrors] = useState({
    name :"",
    lastname : "",
    country : "",
    city : "",
    email : "",
    password : "",
    nickname : ""
})

const handleInput = (e) => {
    console.log(errors);
    
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    setErrorsgit (validation({
        ...input,
        [e.target.name]: e.target.value
    }))
}


    return (
        <div>
            <form>
                <label htmlFor="name"></label>
                <input type="text" onChange={handleInput} name="name"></input>
                <label htmlFor="lastname"></label>
                <input type="text" onChange={handleInput} name="lastname"></input>
                <label htmlFor="country"></label>
                <input type="text" onChange={handleInput} name="country"></input>
                <label htmlFor="city"></label>
                <input type="text" onChange={handleInput} name="city"></input>
                <label htmlFor="email"></label>
                <input type="email" onChange={handleInput} name="email"></input>
                <label htmlFor="nickname"></label>
                <input type="text" onChange={handleInput} name="nickname"></input>
                <label htmlFor="password"></label>
                <input type="password" onChange={handleInput} name="password"></input>
                
            </form>
        </div>
    )
}
export default Register