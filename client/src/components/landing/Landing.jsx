import { Link } from "react-router-dom"

const Landing = () => {
    
    console.log("mierda")
    return (
        <h1>
            este es el landing
            <Link to="/home">Ingresar</Link>
        </h1>
    )
}

export default Landing