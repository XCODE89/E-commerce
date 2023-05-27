import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div>
            este es el landing
            <Link to="/home">Ingresar</Link>
            <Link to="/register">Registrar</Link>
        </div>
    )
}

export default Landing