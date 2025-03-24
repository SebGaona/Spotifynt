import styled from "styled-components";

const SongDetailsCont = styled.div`
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    box-shadow: ${(props) => props.theme.sizes.boxShadow};
    text-align: center;
`;

const SongDetailsImage = styled.img`
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const SongDetailsTitle = styled.h2`
    font-size: 28px;
    font-weight: bold;
    margin: 10px 0;
    color: ${(props) => props.theme.colors.textPrimary};
`;

const SongDetailsParagraph = styled.p`
    font-size: 18px;
    color: ${(props) => props.theme.colors.textSecondary};
    margin: 5px 0;
`;

const SongDetailsAlbum = styled.p`
    font-style: italic;
    color: ${(props) => props.theme.colors.textMuted};
`;

const SongDetailsButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: ${(props) => props.theme.sizes.borderRadius};
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;

    &:hover {
        background-color: ${(props) => props.theme.colors.primaryHover};
        transform: scale(1.05);
    }
`;

export { 
    SongDetailsCont, 
    SongDetailsImage, 
    SongDetailsTitle, 
    SongDetailsParagraph, 
    SongDetailsAlbum, 
    SongDetailsButton 
};