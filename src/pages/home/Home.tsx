import { Box, Button, IconButton, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import React from 'react'
import SendIcon from "@mui/icons-material/Send";
import { useImages } from "../../hooks/images";

type Props = {}

function Home({ }: Props) {
  const { data } = useImages();
  const images = data || []
  return (
    <div>
      {images.map(image => <img key={image.id} src={image.previewURL}/>)}

    </div>
  )
}

export default Home