import { Box, Card, Divider, Typography, Stack } from "@mui/material";
import Heading from "../AboutMe/Heading";
import { CardProject } from "./CardProject";
import tictac from "../resources/flex(2).png";
import GetInTouch from "../Footer.js/GetInTouch";

const Projects = () => {
  return (
    <Box width="80%" height="100%" border={0} sx={{ backgroundColor: "#212529" }}>
      <Stack direction="column" height="100%">
        <Box marginBottom={3}>
          <Heading name="My Work" divider={false} />
          <Divider
            style={{
              height: "5px",
              backgroundColor: "#20c997",
              borderWidth: "0px",
              width: "7%",
              marginLeft: "450px",
              marginTop: "8px",
            }}
          />
        </Box>
        <Stack
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            flexGrow: 1,
            marginBottom: "2rem",
          }}
        >
          <Stack ml={10} direction="row">
            <Box mt={2} >
              <CardProject
                name="Bike Hub"
                toolOne="React JS"
                toolTwo="HTML/CSS"
                toolThree="Firebase"
                toolFour="Material UI"
                shortDesc="An online platform that enables users to rent bicycles for a specified duration, providing a convenient and eco-friendly transportation option for short-term needs. Users can easily browse available bikes, make reservations, and track their rental history."
              />
            </Box>
            <Box mt={2} >
              <CardProject
                name="Personal Portfolio"
                toolOne="React JS"
                toolTwo="Material UI"
                shortDesc="A showcase of an individual's skills, experience, and projects, designed to highlight their professional achievements and provide a platform for potential clients or employers to learn more about their work and expertise."
              />
            </Box>
          </Stack>
          <Stack ml={10} direction="row">
            <Box mt={2} >
              <CardProject
                image={tictac}
                name="Hostel Ease"
                toolOne="Window Form"
                toolTwo="C#"
                toolThree="MYSQL"
                shortDesc="An online portal that streamlines and automates your hostel operations seamlessly. It manages bookings, room assignments, check-ins, check-outs, and financial transactions with ease, ensuring a seamless experience."
              />
            </Box>
            <Box mt={2} >
              <CardProject
                name="Hybrid Chaining Model"
                toolOne="C++"
                toolTwo="BGI"
                toolThree="File Handling"
                shortDesc="Enhances search speed in hashing by combining the benefits of chaining and hashing techniques. It leverages efficient data retrieval through hash functions while utilizing chaining for faster search operations."
              />
            </Box>
          </Stack>
          <Stack ml={10} direction="row" >
            <Box mt={2} >
              <CardProject
                image={tictac}
                name="Multi-Threaded Web Crawler"
                toolOne="C++"
                toolTwo="Ubuntu"
                toolThree="Curl"
                shortDesc="A concurrent program that traverses the internet and downloads web pages using multiple threads. It enables efficient and parallel processing of web pages, allowing for faster crawling and data extraction from websites."
              />
            </Box>
            <Box mt={2} >
              <CardProject
                name="AI Algorithms' Visualizer"
                toolOne="Python"
                toolTwo="Networkx"
                toolThree="Matplotlib"
                toolFour="PyQt5"
                shortDesc="A platform that offers a visual representation of various AI algorithms, enabling users to gain insights into their inner workings and observe their impact on data analysis and decision-making."
              />
            </Box>
          </Stack>
        </Stack>
        <Box mt={2}>
          <GetInTouch />
        </Box>
      </Stack>
    </Box>
  );
};

export default Projects;
