import React, { useState } from "react";

import { TextField } from "@mui/material";
import useCapitaze from "../../hooks/useCapitalize";
import useDebounce from "../../hooks/useDebounce";
import useOneAfterOther from "../../hooks/useOneAfterOther";

const sentence = "viena grazia diena visi zodziai pavirsta pirmom diziosiom raidem";
const arrayOfWords = [
  "vienas",
  "du",
  "trys",
  "keturi",
  "penki",
  "sesi",
  "septyni",
  "astuoni",
  "devyni",
];

const Examples = () => {
  const oneByOther = useOneAfterOther(arrayOfWords, 1);
  const capitalized = useCapitaze(oneByOther);

  return (
    <div>
      <p>{capitalized}</p>
    </div>
  );
};

export default Examples;
