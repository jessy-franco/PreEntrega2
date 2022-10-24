
import Botones from "./Button/buttons"
import CartWidget from "./CartWidget/CartWidget";

function NavBar (){
    return(
            <nav className="flex">
                <Botones>Productos</Botones>
                <Botones>Servicios</Botones>
                <Botones>Contactenos</Botones>
                <Botones><CartWidget /></Botones>
            </nav>
    );
}


export default NavBar;