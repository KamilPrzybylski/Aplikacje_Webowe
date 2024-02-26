import styled from "styled-components";
function Footer() {
    const P = styled.p`
        margin: 0;
        text-align: center;
        padding-bottom: 10px;
    `
    return (
        <footer>
            <P>&copy; Kamil Przybylski 2024</P>
        </footer>
    )
}
export default Footer