import Heading from "./Heading";
import { Box, Typography, Stack } from "@mui/material";
import Intro from "./Intro";
import ProgressBar from "./ProgressBar";

const About = () => {
  return (
    <>
      <Box width="80%"  sx={{ backgroundColor: "#212529" }}>
        <Stack direction="column">
          <Heading divider={true} name='Know Me More'></Heading>
          <Stack>
            <Intro></Intro>
          </Stack>
          <Heading divider={true} name='Skills I Have'></Heading>
         <Stack direction="row" ml={20}>
          <ProgressBar name='HTML/CSS' value={75}></ProgressBar>
          <ProgressBar name='JavaScript' value={80}></ProgressBar>
         
          </Stack>
          <Stack direction="row" ml={20}>
        
          <ProgressBar name='React JS' value={85}></ProgressBar>
        
          <ProgressBar name='Express JS' value={80}></ProgressBar>
        </Stack>
        <Stack direction="row" ml={20}>
        
          <ProgressBar name='Node JS' value={80}></ProgressBar>
          <ProgressBar name='React-Native' value={75}></ProgressBar>
          

</Stack>
     <Stack direction="row" ml={20}>
        
          <ProgressBar name='C/C++' value={65}></ProgressBar>
        
          <ProgressBar name='Python' value={72}></ProgressBar>
        </Stack>
     

        <Stack direction="row" ml={20}>
        
        <ProgressBar name='Redux' value={60}></ProgressBar>
      
        <ProgressBar name='Material UI' value={78}></ProgressBar>
      </Stack>


        </Stack>
      </Box>
    </>
  );
};

export default About;
