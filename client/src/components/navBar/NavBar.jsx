import Cart from "../cart/Cart";
import logo from "../../images/logo.jpg"
import style from "./NavBar.module.css"

const NavBar = () => {
    
    console.log("este es el navbar");
    return (
    <header id="header" className="header">
    <div className="container">
        <div className={style.row}>
            <div className="four columns">
                <img src={logo} alt="logo" id="logo"/>
            </div>
            <Cart/>
        </div> 
    </div>
    </header>
    )
}

export default NavBar