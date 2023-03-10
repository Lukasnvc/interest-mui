import { Box, Button, IconButton, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import React from 'react'
import SendIcon from "@mui/icons-material/Send";

type Props = {}

function Home({}: Props) {
  return (
    <div>Home

<Button>Lukas</Button>
      <Button startIcon={<DeleteIcon/>} color="secondary" variant="contained">Lukas</Button>
      <Button endIcon={<SendIcon />} variant="outlined">Lukas</Button>
      <IconButton aria-label="delete">
        <DeleteIcon/>
      </IconButton>
      <Typography>Tekstukas</Typography>
      <Typography component="span" variant="body2">kitas tekstukas</Typography>
      <Typography component="span" variant="subtitle1">kitas tekstukas</Typography>
      <Typography variant="subtitle2">kitas tekstukas</Typography>
      <Typography variant="h1">kitas tekstukas</Typography>
      <Typography variant="overline">kitas tekstukas</Typography>
      <Typography color="textSecondary" variant="subtitle2">pilka spalva</Typography>
      <Box
      padding={1}
      >Lukas</Box>
      <Box
        p={1}
        sx={(theme) =>({border: `1px solid ${theme.palette.primary.main}`})}
      >Lukas</Box>
    </div>
  )
}

export default Home