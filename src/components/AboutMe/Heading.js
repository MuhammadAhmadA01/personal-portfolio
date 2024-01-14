import { Divider, Typography, Box, Stack } from "@mui/material";

const Heading = (props) => {
  return (
    <>
      <Stack direction="column">
        <Typography
          variant="h2"
          color="white"
          fontSize={40}
          fontWeight="bolder"
          marginLeft={50}
          mt={10}
        >
          {props.name}
        </Typography>

        {props.divider && <hr
          style={{
            height: "5px",
            backgroundColor: "#20c997",
            borderWidth: "0px"
          }}
          
          width={props.name === 'My Skills' ? '7%' : '10%'}
          ></hr>}
      </Stack>
    </>
  );
};

export default Heading;
