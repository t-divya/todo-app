import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const StyledUl = styled.ul`
  width: 50%;
  margin-top: 30px;
  color: white;
  margin-right: 2px;
`;

export default function UserTable() {
  const userDetails = useSelector((state: RootState) => state.userDetails);

  // const value = useSelector((state: RootState) => state.userDetails.userName);
  async function handleOnGetClick(item: string, i: number) {
    await fetch(`/user?${item}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      cache: "default",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("get data fetched", data[i].id);
        // console.log("get data id fetched", data.id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <StyledUl>
      {userDetails.map((item, i) => {
        console.log(item);
        return (
          <li key={item.id.toString()}>
            {item.username}
            <button onClick={() => handleOnGetClick(item.id.toString(), i)}>
              GET id
            </button>
          </li>
        );
      })}
    </StyledUl>
  );
}
