import { Box, Button, Grid, IconButton, ImageList, ImageListItem, Typography } from "@mui/material";

import Card from './Card'
import DeleteIcon from "@mui/icons-material/Delete";
import React from 'react'
import SendIcon from "@mui/icons-material/Send";
import { useImages } from "../../hooks/images";

type Props = {}

function Home({ }: Props) {
  const { data } = useImages();
  const images = data || []
  return (
    <ImageList variant="masonry" cols={4} gap={8}>
      {images.map((item) => (
        <ImageListItem key={item.previewURL}>
          <img
            src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
            srcSet={`${item.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.id.toString()}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Home