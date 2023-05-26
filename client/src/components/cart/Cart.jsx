import carrito from "../../images/cart.png"

const  Cart = () => {
    return (
        <div className="two columns u-pull-right">
                <ul>
                    <li className="submenu">
                        <img src={carrito} alt="carrito" id="img-carrito"/>
                        <div id="carrito">
                            <table id="lista-carrito" className="u-full-width">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                            <a href="#" id="vaciar-carrito" className="button u-full-width">Vaciar Carrito</a>
                        </div>
                    </li>
                </ul>
            </div>
    )
}
export default Cart