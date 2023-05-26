//! temporal hasta implementar cloudinary
import curso1 from "../../images/curso1.jpg"
import estrellas from "../../images/estrellas.png"


const CardCourse = () => {
    
    const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.dataset.id);
    console.log("agregado al carrito");
}
    

    return (
        <div className="card">
            <img src={curso1} className="imagen-curso u-full-width"/>
            <div className="info-card">
                <h4>HTML5, CSS3, JavaScript para Principiantes</h4>
                <p>Juan Pedro</p>
                <img src={estrellas}/>
                <p className="precio">$200  <span className="u-pull-right ">$15</span></p>
                <button className="u-full-width button-primary button input agregar-carrito" onClick={handleClick} data-id="1">Agregar Al Carrito</button>
            </div>
        </div>
    )
}
export default CardCourse