import { Link } from "react-router-dom"

const Home = () => {
    return (
        <h1>
            este es el home
            <Link to="/courses">Cursos</Link>
        </h1>
    )
}
export default Home