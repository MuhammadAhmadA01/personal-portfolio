import {
  List,
  Stack,
  Typography,
  Box,
  ListItem,
  Divider,
  Button,
} from "@mui/material";
import pdf from "../resources/Cv.pdf";

const Intro = () => {
  const handleDownloadClick = () => {
    const fileUrl = pdf;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Cv.pdf";
    link.click();
  };

  return (
    <>
      <Stack direction="row">
        <Box ml={5} mt={15} width={560}>
          <Stack>
            <Typography
              ml={2}
              color="white"
              variant="h5"
              style={{ display: "inline", fontWeight: "200px" }}
            >
              I'm{" "}
              <Typography
                fontWeight="bold"
                variant="h5"
                component="span"
                color="#20c997"
                style={{ display: "inline" }}
              >
                Muhammad Ahmad
              </Typography>
              , a Full-Stack Developer
            </Typography>
            <Typography
              color="#ffffff80"
              mt={2}
              style={{ textAlign: "justify", fontSize: "18px" }}
            >
              A CS geek with extraordinary interest in IT development and
              Advancement of technologies. I'm always eager to learn new things
              with passion and excitement. I am an avid reader to keep myself
              up-to-date with current trends - be it in technology, data,
              business or even in the space where the three combine. I am
              enthusiastic to solve challenges and create value through code in
              development. I wish to work in a tight knit team of programmers,
              designers and testers where I can make meaningful contributions.
            </Typography>
          </Stack>
        </Box>
        <List style={{ marginTop: "100px", marginLeft: "70px" }}>
          <ListItem>
            <Typography color="white" fontWeight="bold">
              Name: Muhammad Ahmad
            </Typography>
          </ListItem>
          <Divider color="white" variant="middle"></Divider>
          <ListItem sx={{ marginTop: "10px" }}>
            <Typography color="white" fontWeight="bold" marginTop="4px">
              Email:{" "}
            </Typography>
            <a
              href="mailto:mahmad.8962@gmail.com"
              style={{
                textDecoration: "none",
                marginLeft: "5px",
                color: "#20c997",
                fontWeight: "bold",
              }}
            >
              MAhmad.8962@gmail.com
            </a>
          </ListItem>
          <Divider variant="middle" color="white"></Divider>
          <ListItem sx={{ marginTop: "13px" }}>
            <Typography color="white" fontWeight="bold">
              Degree: BS Computer Science
            </Typography>
          </ListItem>

          <Divider variant="middle" color="white"></Divider>
          <ListItem sx={{ marginTop: "13px" }}>
            <Typography color="white" fontWeight="bold">
              University: Fast NUCES{" "}
            </Typography>
          </ListItem>

          <Divider variant="middle" color="white"></Divider>
          <ListItem>
            <Button
              onClick={handleDownloadClick}
              sx={{
                "&:hover": {
                  backgroundColor: "#20c997",
                  color: "#ffffff",
                  borderColor: "#20c997",
                },
                color: "#ffffff",
                marginTop: "20px",
                borderRadius: "50px",
                paddingTop: "15px",
                paddingBottom: "15px",
                paddingLeft: "35px",
                paddingRight: "35px",
                borderColor: "#ffffff",
              }}
              size="large"
              variant="outlined"
              color="primary"
            >
              Download CV
            </Button>
          </ListItem>
        </List>
      </Stack>
    </>
  );
};

export default Intro;
