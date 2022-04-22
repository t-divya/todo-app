import styled from "styled-components";
import { useState } from "react";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  margin: auto;
  color: #c7dbeb;
  justify-content: center;
`;
const UserNameContainer = styled.div``;
const EmailContainer = styled.div``;
const SubmitButtonContainer = styled.div``;
const RegisterContainer = styled.div``;

export function HomePage() {
  const [userName, setUserName] = useState("");
  function handleChangeOnUserName(e: React.ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value);
  }
  return (
    <MainContainer>
      <RegisterContainer>Register</RegisterContainer>
      <form>
        <UserNameContainer>
          <label>
            User Name:
            <input
              type="text"
              value={userName}
              onChange={handleChangeOnUserName}
            ></input>
          </label>
        </UserNameContainer>

        <EmailContainer>
          <label>
            Email:<input type="text"></input>
          </label>
        </EmailContainer>
        <SubmitButtonContainer>
          <input type="submit" value="log in"></input>
        </SubmitButtonContainer>
      </form>
    </MainContainer>
  );
}
