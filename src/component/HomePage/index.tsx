import styled from "styled-components";
import { useState } from "react";
// import { Link } from "react-router-dom";

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
  const [userName, setUserName] = useState("your name");
  const [email, setEmail] = useState("youremail@gmail.com");

  function handleChangeOnUserName(e: React.ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value);
  }
  function handleChangeOnEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleFormSubmit(event: React.ChangeEvent<any>) {
    console.log("submit form");
    event.preventDefault();
    const data = { name: userName };

    fetch("/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        console.log("data.message", data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function handleClickButton() {
    setTimeout(() => {
      console.log("inside time out");
    }, 7000);
  }
  return (
    <MainContainer>
      <RegisterContainer>Register</RegisterContainer>
      <form
        method="post"
        onSubmit={handleFormSubmit}
        action="http://localhost:3001/login"
      >
        <UserNameContainer>
          <label>
            User Name:
            <input
              type="text"
              name="name"
              value={userName}
              onChange={handleChangeOnUserName}
            ></input>
          </label>
        </UserNameContainer>
        <EmailContainer>
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={email}
              onChange={handleChangeOnEmail}
            ></input>
          </label>
        </EmailContainer>
        <SubmitButtonContainer>
          {/* <Link to="/dashboardhomepage"> */}
          <input
            type="submit"
            value="Log in"
            onClick={handleClickButton}
          ></input>
          {/* </Link> */}
        </SubmitButtonContainer>
      </form>
    </MainContainer>
  );
}
