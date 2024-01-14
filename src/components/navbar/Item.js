import Link from "@mui/material/Link";
import { useState } from "react";
const Item=(props)=> {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [checkClicked, setCheckClicked] = useState(null);
  const handleOnMouseDown = () => {
    setMouseEnter(false);
  };
  const handleOnMouseEnter = () => {
    setMouseEnter(true);
  };
  const handleOnClick = (val) => {
    props.onClickItem(val);
  };
  return (
    <Link
      
      smooth
      spy
      to={props.name}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseDown}
      onClick={() => handleOnClick(props.name)}
      href="#"
      component="button"
      underline="none"
      style={{
        marginLeft:'30px',
        color: props.isClicked ? "#20c997" : mouseEnter ? "#20c997" : "#e1e1e1",
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "40px",
        marginRight: "35px",
      }}
    >
      {props.name}
    </Link>
  );
}

export default Item;
