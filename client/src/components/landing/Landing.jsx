import { Link } from "react-router-dom"

const Landing = () => {
    console.log("mierda")
    return (
        <div>
            este es el landing
            <Link to="/home">Ingresar</Link>
            <Link to="/register">Ingresar</Link>
        </div>
    )
}

export default Landing