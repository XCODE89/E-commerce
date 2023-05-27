import { useState } from "react";
import axios from "axios"

import validation from "./validation"
import style from "./Register.module.css"


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
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validation({ ...input, [name]: value })[name]
    }));
  };

  const allFieldsEmpty = () => {
    return Object.values(errors).every((value) => value === "");
}

const handleSubmit = (event) => {
    event.preventDefault();
    if(allFieldsEmpty()) {
        axios.post("http://localhost:5000/users",input)
        .then(res=>alert("Felicidades, has creado un nuevo post!!!"))
        .catch(error => error)
    } 
    else {
        alert("The fields are incomplete or incorrect.")
    }
}


    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input className={style.input} type="text" onChange={handleInput} name="name" placeholder="Name"></input>
                <div className={style.error}>{errors.name?<p className={style.errorText}>{errors.name}</p>:""}</div>
                <label htmlFor="lastname"></label>
                <input className={style.input} type="text" onChange={handleInput} name="lastname" placeholder="Lastname"></input>
                <div className={style.error}>{errors.lastname?<p className={style.errorText}>{errors.lastname}</p>:""}</div>
                <label htmlFor="country"></label>
                <input className={style.input} type="text" onChange={handleInput} name="country" placeholder="Country"></input>
                <div className={style.error}>{errors.country?<p className={style.errorText}>{errors.country}</p>:""}</div>
                <label htmlFor="city"></label>
                <input className={style.input} type="text" onChange={handleInput} name="city" placeholder="City"></input>
                <div className={style.error}>{errors.city?<p className={style.errorText}>{errors.city}</p>:""}</div>
                <label htmlFor="email"></label>
                <input className={style.input} type="email" onChange={handleInput} name="email" placeholder="Email"></input>
                <div className={style.error}>{errors.email?<p className={style.errorText}>{errors.email}</p>:""}</div>
                <label htmlFor="nickname"></label>
                <input className={style.input} type="text" onChange={handleInput} name="nickname" placeholder="Nickname"></input>
                <div className={style.error}>{errors.nickname?<p className={style.errorText}>{errors.nickname}</p>:""}</div>
                <label htmlFor="password"></label>
                <input className={style.input} type="password" onChange={handleInput} name="password" placeholder="Password"></input>
                <div className={style.error}>{errors.password?<p className={style.errorText}>{errors.password}</p>:""}</div>

                <button type="submit">Registrar</button>

        
            </form>
        </div>
    )
}
export default Register