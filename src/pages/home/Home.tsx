import {
  Box,
  Button,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { PixabayImage } from "../../types/images";
import { uniqBy } from "lodash";
import { useAppSelector } from "../../hooks/store";
import { useImages } from "../../hooks/images";

type Props = {};

function Home({}: Props) {
  const searchValue = useAppSelector((state) => state.search.value);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<PixabayImage[]>([]);
  const { data, isLoading } = useImages(page, debouncedSearch);
  const images = data || [];

  useEffect(() => {
    setTimeout(() => {
      if (searchValue) {
        setDebouncedSearch(searchValue);
        setPage(1);
        setItems([]);
      }
    }, 1000);
  }, [searchValue]);

  useEffect(() => {
    if (!isLoading) {
      setItems((prevItems) => uniqBy([...prevItems, ...images], (image) => image.id));
    }
  }, [images]);

  const fetchData = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <InfiniteScroll
      dataLength={images.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<LinearProgress />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }>
      {
        <ImageList variant="masonry" cols={4} gap={8}>
          {items.map((item) => (
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
      }
    </InfiniteScroll>
  );
}

export default Home;
