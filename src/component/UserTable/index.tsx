import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const StyledUl = styled.ul`
  width: 50%;
  margin-top: 30px;
  color: white;
  margin-right: 2px;
`;
const StyledButton = styled.button`
  margin-right: 4px;
  margin-left: 1px;
`;

export default function UserTable() {
  const userDetails = useSelector((state: RootState) => state.userDetails);

  // const value = useSelector((state: RootState) => state.userDetails.userName);
  async function handleOnGetClick(item: any) {
    await fetch(`/user/${item}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      cache: "default",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("get data fetched", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async function handleOnDeleteClick(id: any) {
    await fetch(`/user/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      cache: "default",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("get data fetched", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const myDataObject = {
    username: "john",
    email: "johndoe@gmail.com",
  };

  async function handleOnPutClick(id: any) {
    await fetch(`/user/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myDataObject),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("get data fetched", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <StyledUl>
      {userDetails.map((item) => {
        console.log(item);
        return (
          <li key={item.id.toString()}>
            {item.username}
            <StyledButton onClick={() => handleOnGetClick(item.id)}>
              Get
            </StyledButton>
            <span></span>
            <StyledButton onClick={() => handleOnDeleteClick(item.id)}>
              Delete
            </StyledButton>
            <StyledButton
              onClick={() => {
                handleOnPutClick(item.id);
              }}
            >
              Put
            </StyledButton>
          </li>
        );
      })}
    </StyledUl>
  );
}
