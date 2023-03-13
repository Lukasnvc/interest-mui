import { Avatar, Box, Grid, Paper, TextField, Typography } from "@mui/material";

import LockOpenIcon from '@mui/icons-material/LockOpen';

const Login = () => {
  return (
    <Paper
    elevation={10}
    >
      <Box
      padding={2}
      >
        <Grid
          container
        justifyContent='center'>
          <Avatar><LockOpenIcon/></Avatar>
        </Grid>
        <Typography
          variant="h6"
          textAlign='center'
          my={2 }
        >
          Login
        </Typography>
        <TextField label="Email Address" sx={{ mb: 2 }} fullWidth required />
        <TextField type='password' label="Password" sx={{mb:2}} fullWidth required/>
     
      </Box>
    </Paper>
  )
}

export default Login