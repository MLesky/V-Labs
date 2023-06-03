import { Favorite, Share } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IMAGES } from "../utils";
import { useFirebaseAuth } from "../firebaseConfig/FirebaseAuthContext";

export default function ExpCard({ image, url, title, description }) {
  const user = useFirebaseAuth();
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const handleSetLike = () => {
    if (user) {
      setLike(!like);
    }
  };

  const toIframe = () => {
    navigate("/experiment", { state: { url: url, experiment: title } });
  };

  return (
    <>
      <Stack className="card" justifyContent='space-between' sx={{ width: 200}}>
        <a
          onClick={() => {
            toIframe();
          }}
          style={{
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          <div style={{backgroundImage: `url(${image})`, width: '100%', height: 150, backgroundSize: 'fit', padding: 2}}></div>
          <h5 style={{ marginTop: 5, textTransform: 'capitalize' }}>{title}</h5>

          <p style={{
            textTransform: 'capitalize', 
            maxHeight: '40px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '0.8em',
          }}>{description}</p>
        </a>
        <Stack direction='row'>
          <IconButton aria-label="add to favorites" onClick={handleSetLike}>
            <Favorite sx={{ color: like ? 'red' : 'currentColor' }} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}
