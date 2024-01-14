import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
const ProgressBarValue = (props) => {
    const { value } = props;
  
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' , marginTop:'50px' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
            <Typography color='white' fontWeight='bold' marginLeft={6} fontSize={23}>{props.name}</Typography>
            <Box zIndex={-1} width={300} color='#20c997' border={5} borderRadius={50} marginLeft={5} marginTop={1}>

                <Box zIndex={1} width={350}  color='black'></Box>
            </Box>
            
        </Box>
        <Box >
          <Typography variant="body2" color="white" fontWeight='bold' fontSize='15px'  marginBottom={1}>{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  };
  
  export default function ProgressBar(props) {
    return (
      <Box sx={{ width: '40%' }}>
        <ProgressBarValue name={props.name} value={props.value} />
      </Box>
    );
  }
  