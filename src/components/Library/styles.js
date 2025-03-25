import styled from "styled-components";

const LibraryCont = styled.div`
    margin: 20px;
`;

const LibrarySong = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff1a1f;
  }
`;


export { LibraryCont, LibrarySong, RemoveButton };