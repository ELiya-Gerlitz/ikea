import NavBar from "../NavBar/NavBar";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			I am layout Area
            <NavBar/>
            <Routing/>
        </div>
    );
}

export default Layout;
