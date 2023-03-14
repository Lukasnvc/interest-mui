import * as Yup from 'yup';

import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";

import LockOpenIcon from '@mui/icons-material/LockOpen';
import { TextField } from "formik-mui";
import { User } from '../../types/user';
import { UserContext } from '../../context/UserContext';
import { loginFormInitialValues } from './const';
import { useContext } from 'react';

const Login = () => {
  const{handleLogIn} = useContext(UserContext)
  const onSubmit = (user:User) => {
   handleLogIn(user)
  }
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
        <Formik
          initialValues={loginFormInitialValues}
          onSubmit={onSubmit}
        >
          {({isSubmitting}) => (<Form>
            <Field component={TextField} name='email' type='email' label="Email Address" sx={{ mb: 2 }} fullWidth required />
            <Field component={TextField} name='password' type='password' label="Password" sx={{ mb: 2 }} fullWidth required />
            <Button disabled={isSubmitting} type='submit' variant="contained" fullWidth sx={{mb: 2}}>Sign In</Button>
          </Form>)}
          
        </Formik>
     
      </Box>
    </Paper>
  )
}

export default Login