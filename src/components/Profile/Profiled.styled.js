import styled from 'styled-components';

export const CardItem = styled.div`
  background-color: rgba(226,226,226,0.3);
  border-radius: 4%;
  width: 350px;
  margin: 20px auto;

  div {
    padding: 10px;
    text-align: center;

    img {
      width: 150px;
      margin: 30px;
      background-color: rgb(235, 180, 139);
      border-radius: 20%;
    }
  }
  ul {
    display: flex;
    align-items: center;
    height: 84px;
    background-color: rgb(226, 226, 226);
    padding: 0px;

    li {
      display: flex;
      flex-direction: column;
      flex-basis: calc(100% / 3);
      text-align: center;
      height: 100%;
      border: 1px solid rgb(184, 183, 183);
    }
  }
`;

export const UserName = styled.p`
  font-size: 30px;
  font-weight: 800;
`;

export const TagLocation = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const Label = styled.span`
  display: flex;
  font-size: 20px;
  height: 100%;
  margin: 0 auto;
  align-items: flex-end;
`;

export const Quantity = styled.span`
  display: flex;
  padding-top: 10px;
  font-size: 20px;
  font-weight: 800;
  height: 100%;
  margin: 0 auto;
  align-items: flex-start;
`;