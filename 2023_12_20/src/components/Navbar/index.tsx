import {Link} from "react-router-dom";
import { routes } from "../../helpers/routes.tsx";

function Navbar() {
    return (
        <nav>
            <ul>
                {routes.map((route) => (
                    
                    <li key={route.path}>
                        <Link to={route.path}>
                            {route.title}
                        </Link>
                    </li>
                    
                ))}
            </ul>
        </nav>
    )
}

export default Navbar