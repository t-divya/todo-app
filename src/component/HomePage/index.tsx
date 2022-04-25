import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import { UserInfoState } from "../Reducer";

import UserTable from "../UserTable";
import { addUser } from "../Reducer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  color: #c7dbeb;
  text-align: center;
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserNameContainer = styled.div``;
const EmailContainer = styled.div``;
const RegisterContainer = styled.div``;

export function HomePage() {
  const [userName, setUserName] = useState("your name");
  const [email, setEmail] = useState("hello@gmail.com");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleChangeOnUserName(e: React.ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value);
  }
  function handleChangeOnEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleFormSubmit(event: React.ChangeEvent<any>) {
    event.preventDefault();
    const data = { username: userName, email: email };

    fetch("/user", {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("before if data", data);
        if (data.username) {
          console.log("Success:", data);
          handleDispatch(data);
          // navigate("/dashboardhomepage");
        }

        // console.log("data.message", data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleDispatch(state: any) {
    console.log("inside handle dispatch fn", state);
    return dispatch(addUser(state));
  }

  return (
    <DisplayContainer>
      <MainContainer>
        <RegisterContainer>Register</RegisterContainer>
        <form onSubmit={handleFormSubmit}>
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
              Email:
              <input
                type="text"
                value={email}
                onChange={handleChangeOnEmail}
              ></input>
            </label>
          </EmailContainer>
          <input type="submit" value="Create"></input>
        </form>
      </MainContainer>
      <UserTable />
    </DisplayContainer>
  );
}
