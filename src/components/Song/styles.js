import styled from "styled-components";

const SongCont = styled.div`
    border: 1px solid ${(props) => props.theme.colors.border};
    padding: 10px;
    margin: 10px;
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    text-align: center;
    width: 200px;
    height: auto;
    background-color: ${(props) => props.theme.colors.background};
`;

const SongImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: ${(props) => props.theme.sizes.borderRadius};
`;

const Button = styled.button`
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    padding: 10px;
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    cursor: pointer;
    color: white;
    font-size: 14px;
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryHover};
        transform: scale(1.05);
    }
`;

export { SongCont, SongImage, Button };