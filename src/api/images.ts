import { PixabayImage } from "../types/images";
import axios from "axios";

const URL = "https://pixabay.com/api";
const KEY = "34412169-b7c4122526f45f717854a5d61";

export const fetchImages = (page: number, search: string): Promise<PixabayImage[]> => {
  return axios
    .get(URL, { params: { key: KEY, page, q: search } })
    .then((response) => response.data.hits);
};