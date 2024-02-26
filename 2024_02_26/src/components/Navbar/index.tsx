import { Link } from "react-router-dom";
import { routes } from "../../helpers/routes.tsx";
import styled from "styled-components";
function Navbar() {
    const Nav = styled.nav`
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    `
    const Navbars = styled(Link)`
        width: 150px;
        height: 50px;
        background-color: #FF79C4;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-weight: bold;
        color: navajowhite;
        text-decoration: none;
    `
    return (
        <Nav>
            {routes.map((route) => (
                <Navbars to={route.path} key={route.path}>
                    {route.title}
                </Navbars>
            ))}
        </Nav>
    )
}

export default Navbar