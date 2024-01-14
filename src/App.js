import { useEffect, useState } from "react";
import Topnavbar from "./components/navbar/Topnavbar";
import Home from "./components/HomePage/Home";
import { Stack } from "@mui/material";
import About from "./components/AboutMe/About";
import Projects from "./components/Projects/Projects";
const App=()=> {
  const [currPage, setPage] = useState("Home");
  const [currentComponent, setCurrentComponent] = useState("Home");
  const handleItemClick = (page) => {
    setPage(page);
  };
  return (
    <div>
      <Stack direction="row">
        <Topnavbar
          clickedVal={currentComponent}
          onItemClick={handleItemClick}
        ></Topnavbar>
        {currPage === "Home" && <Home></Home>}

        {currPage === "About me" && <About></About>}
        
        {currPage === "Projects" && <Projects></Projects>}
      </Stack>
    </div>
  );
}
export default App;
