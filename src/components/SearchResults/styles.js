import styled from "styled-components";

const SearchResultsCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
`;

const SearchCard = styled.div`
    flex: 1 1 calc(33.33% - 40px);
    max-width: calc(33.33% - 40px);
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }
`;

const SearchCardImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
`;

const SearchCardContent = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
`;

const SearchCardTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;

const SearchCardArtist = styled.p`
    font-size: 16px;
    color: #555;
`;

const SearchCardLength = styled.p`
    font-size: 14px;
    color: #777;
`;

const SearchCardActions = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-bottom: 15px;
`;

const Button = styled.button`
    padding: 10px 15px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.2s;

    &.add-button {
        background-color: #3ddccc;
        color: white;

        &:hover {
            background-color: #35c1b3;
            transform: scale(1.05);
        }
    }

    &.details-button {
        background-color: #7b28a7;
        color: white;

        &:hover {
            background-color: #4d176a;
            transform: scale(1.05);
        }
    }
`;

const ResponsiveCard = styled(SearchCard)`
    @media (max-width: 768px) {
        flex: 1 1 calc(50% - 20px);
        max-width: calc(50% - 20px);
    }

    @media (max-width: 480px) {
        flex: 1 1 100%;
        max-width: 100%;
    }
`;

export {
    SearchResultsCont,
    SearchCard,
    SearchCardImage,
    SearchCardContent,
    SearchCardTitle,
    SearchCardArtist,
    SearchCardLength,
    SearchCardActions,
    Button,
    ResponsiveCard,
};