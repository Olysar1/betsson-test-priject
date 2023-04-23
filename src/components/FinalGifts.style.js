import styled from "styled-components";

export const StyledFinalGifts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: 120px;
  background-position: 95% 0%;
  background-color: #1e2122;
  border-radius: 12pt;
  padding: 35px;

  h2 {
    margin: 0px;
  }

  p {
    margin-bottom: 0px;
    text-align: left;
  }
`;
