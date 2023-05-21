import { Favorite, Share } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IMAGES } from "../utils";

export default function ExpCard({ image, url, title, description }) {
  const navigate = useNavigate();
  const [like, setLike] = useState(true);
  const  handleSetLike = () => setLike(!like);

  const toIframe = () => {
    navigate("/experiment", { state: { url: url } });
  };

  return (
    <>
      <Stack className="card" justifyContent='space-between'>
        <a
          onClick={() => {
            toIframe();
          }}
          style={{
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          <img src={image} alt={"Nicely"} />
          <h3>{title}</h3>

          <p>{description}</p>
        </a>
        <Stack direction='row'>
        <IconButton aria-label="add to favorites" onClick={handleSetLike}>
          <Favorite sx={{color: like ? 'red' : 'currentColor'}}/>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        </Stack>
      </Stack>
    </>
  );
}
