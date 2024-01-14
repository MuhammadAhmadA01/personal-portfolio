import { Button } from "@mui/material";
const GetInTouch=()=> {
    const handleContactClick=()=>{

    }
    return ( <>
                <Button
              onClick={handleContactClick}
              sx={{
                "&:hover": {
                  backgroundColor: "#20c997",
                  color: "#ffffff",
                  borderColor: "#20c997",
                },
                color: "#ffffff",
                marginLeft: "420px",
                marginBottom:'300px',
                borderRadius: "50px",
                paddingTop: "15px",
                paddingBottom: "15px",
                paddingLeft: "35px",
                paddingRight: "35px",
                borderColor: "#ffffff",
              }}
              size="medium"
              variant="outlined"
              color="primary"
              href="mailto:mahmad.8962@gmail.com">
              Get In Touch
            </Button>

    </> );
}

export default GetInTouch;