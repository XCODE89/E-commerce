import Banner from "./Banner";
import CardCourse from "./CardCourse";

const Courses = () => {
    console.log("estos son los courses");
    return (
        <div>
            estos son los cursos
            <Banner/>

            <div id="lista-cursos" className="container">
                <h1 id="encabezado" className="encabezado">Cursos En Línea</h1>
                <CardCourse/>
            </div>

        </div>
    )
}

export default Courses