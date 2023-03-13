import { Grid, Typography } from '@mui/material';

import { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

const AuthLayouts = ({children}: Props) => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      height='100vh'
    >
      <Grid
        item
        xs={12}
        md={7}
      >
        <Typography
          variant='h2'
          textAlign='center'
          padding={8}
        >
          Sign up to get your Ideas
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
      >
        {children}
      </Grid>
      <Grid
        item
        xs={1} />
    </Grid>
  )
}

export default AuthLayouts