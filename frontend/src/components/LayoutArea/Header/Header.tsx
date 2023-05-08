import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import Register from "../../AuthArea/Register/Register";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <h1>IKEA</h1>
			<NavBar/>
            <AuthMenu/>
        </div>
    );
}

export default Header;
