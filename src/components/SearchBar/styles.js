import styled from "styled-components";

export const SearchBarCont = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.background};
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    box-shadow: ${(props) => props.theme.sizes.boxShadow};
`;

export const SearchInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: ${(props) => props.theme.colors.primary};
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

export const SearchButton = styled.button`
    margin-left: 10px;
    padding: 10px 15px;
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryHover};
    }
`;
