import { IconButton, Stack } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
const Socials=()=> {
  return (
    <>
      <Stack
        style={{ marginTop: "60px", marginLeft: "40px" }}
        spacing={2}
        direction="row"
      >
        <a href="https://www.facebook.com/aimmi.a01/" target="_blank">
          <IconButton>
            <FacebookRoundedIcon
              style={{ color: "#e1e1e1" }}
            ></FacebookRoundedIcon>
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-ahmad-95502a197/"
          target="_blank"
        >
          <IconButton>
            <LinkedInIcon style={{ color: "#e1e1e1" }}></LinkedInIcon>
          </IconButton>
        </a>
        <a target="_blank" href="https://twitter.com/MAhmad8962">
          <IconButton>
            <TwitterIcon style={{ color: "#e1e1e1" }}></TwitterIcon>
          </IconButton>
        </a>
        <a href="https://github.com/MuhammadAhmadA01" target="_blank">
          <IconButton>
            <GitHubIcon style={{ color: "#e1e1e1" }}></GitHubIcon>
          </IconButton>
        </a>
      </Stack>
    </>
  );
}

export default Socials;
