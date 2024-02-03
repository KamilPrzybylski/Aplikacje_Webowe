import { Link } from "react-router-dom";
import { routes } from "../../helpers/routes.tsx";

function Navbar() {
    return (
        <nav>
            {routes.map((route) => (
                <Link to={route.path} key={route.path}>
                    <div className={"navbars"}>
                        {route.title}
                    </div>
                </Link>
            ))}
        </nav>
    )
}

export default Navbar