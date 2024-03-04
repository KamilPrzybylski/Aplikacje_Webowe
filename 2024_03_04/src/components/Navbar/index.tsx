import {Link} from "react-router-dom"
import {routes} from "../../helpers/routes.tsx";

function Navbar() {
  return (
    <nav>
      <ul>
        {
          routes
            .filter((route) => !route.hideInMenu)
            .map((route) => (
              <li key={route.path}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))
        }
      </ul>
    </nav>
  )
}

export default Navbar