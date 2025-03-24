import styled from "styled-components";

const HeaderCont = styled.header`
    background-color: #3ddccc;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Title = styled.a`
    text-decoration: none;
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export { HeaderCont, Title };