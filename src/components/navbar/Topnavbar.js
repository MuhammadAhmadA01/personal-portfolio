import myImage from "../resources/profile.jpg";
import Item from "./Item";
import { Stack, Typography } from "@mui/material";
import Socials from "./Socials";
import { useState } from "react";
const Topnavbar=(props)=> {
  const [val, setVal] = useState("Home");
  const handleOnClickItem = (page) => {
    setVal(page);
    props.onItemClick(page);
  };
  const isItemBeingRendered = (itemName) => {
    return val === itemName;
  };
  return (
    <>
      <div style={{ background: "#111111", width: "300px", height: "1250px",position:'relative' }}>
        <img
          src={myImage}
          alt="hello"
          style={{
            height: "220px",
            width: "220px",
            borderRadius: "50%",
            marginTop: "30px",
            marginLeft: "40px",
          }}
        ></img>
        <Stack spacing={2} >
          <Typography variant="h5" color="#e1e1e1" ml={6} mt={3}>
            Muhammad Ahmad
          </Typography>
          <Item
            isClicked={isItemBeingRendered("Home")}
            onClickItem={handleOnClickItem}
            name="Home"
          ></Item>
          <Item
            isClicked={isItemBeingRendered("About me")}
            onClickItem={handleOnClickItem}
            name="About me"
          ></Item>
          <Item
            isClicked={isItemBeingRendered("Projects")}
            onClickItem={handleOnClickItem}
            name="Projects"
          ></Item>
              </Stack>
        <Socials></Socials>
      </div>
    </>
  );
}

export default Topnavbar;
