import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
  Collapse,
  IconButton,
  CardHeader,
  Stack,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
export const CardProject = (props) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box width="400px" ml={3}>
      <Card sx={{ background: "#212529", boxShadow:'20',borderRadius:'20px' }}>
        <CardContent>
          <Typography fontWeight='bold' color="#20c997" gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography color="white" variant="body2">
            {props.shortDesc}
          </Typography>
        </CardContent>
        <CardHeader
          action={
            <Stack direction="row">
              <Typography color="white" mt={0.5}>
                {expanded ? "Read Less" : "Technologies"}
              </Typography>
              <IconButton
                color="white"
                onClick={handleExpandClick}
                size="small"
              >
                {expanded ? (
                  <KeyboardArrowUpIcon color="white"></KeyboardArrowUpIcon>
                ) : (
                  <KeyboardArrowDownIcon color="white"></KeyboardArrowDownIcon>
                )}
              </IconButton>
            </Stack>
          }
        ></CardHeader>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography color="#20c997" paragraph fontWeight='bold'>
              Technologies Used:
            </Typography>
            <Typography color="white" paragraph>
              {props.toolOne}
            </Typography>
            <Typography color="white" paragraph>
              {props.toolTwo}
            </Typography>
            <Typography color="white" paragraph>
              {props.toolThree}
            </Typography>
            <Typography color="white">{props.toolFour}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};
