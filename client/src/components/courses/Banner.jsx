const Banner = () => {
    
    return (
        <div>
            <div id="hero">
                <div className="container">
                    <div className="row">
                        <div className="six columns">
                            <div className="contenido-hero">
                                <h2>Aprende algo nuevo</h2>
                                <p>Todos los cursos a $15</p>
                                <form action="#" id="busqueda" method="post" className="formulario">
                                    <input className="u-full-width" type="text" placeholder="¿Que te gustaría Aprender?" id="buscador"/>
                                    <input type="submit" id="submit-buscador" className="submit-buscador"/>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            <div className="barra">
                <div className="container">
                    <div className="row">
                        <div className="four columns icono icono1">
                            <p>20,000 Cursos en línea <br/>
                            Explora  los temas más recientes</p>
                        </div>
                        <div className="four columns icono icono2">
                            <p>Instructores Expertos <br/>
                            Aprende con distintos estilos</p>
                        </div>
                        <div className="four columns icono icono3">
                            <p>Acceso de por vida <br/>
                            Aprende a tu ritmo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner