import { useState, React, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Stack, Button, IconButton, Box, Skeleton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import IframeRenderer from "../components/IframeRenderer"
// import { useIsIFrameLoaded } from "../hooks/iframeIsLoaded"
import CircularProgress from '@mui/material/CircularProgress';
import { area } from "../utils";

import Spreadsheet from "react-spreadsheet";
import { grey } from "@mui/material/colors";

const Experiment = ({ hideLoader }) => {
  const location = useLocation();
  const [smallFormWidth, setSmallFormWidth] = useState("0");
  const [largeFormWidth, setLargeFormWidth] = useState("0");
  const [isOpen, setIsOpen] = useState(false);
  const [isIFrameLoaded, setIsIFrameLoaded] = useState(false);

  // const iframeRef = useRef(null);
  // const isIFrameLoaded = useIsIFrameLoaded(iframeRef);

  const handleLoad = () => {
    setTimeout(() => setIsIFrameLoaded(!isIFrameLoaded), 2000);
    console.log("loaded")
  }

  function wasteTime(){
    return(
      <>
        <CircularProgress />
      </>
    )
    }

  const [data, setData] = useState(area);

  const handleOpenForm = () => {
    if (isOpen) {
      setLargeFormWidth("0");
      setSmallFormWidth("0");
      setIsOpen(false);
    } else {
      setLargeFormWidth("50%");
      setSmallFormWidth("100%");
      setIsOpen(true);
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ height: "calc(100vh - 60px)", width: "100vw" }}
    >
      <Box
        sx={{
          transition: "0.5s",
          backgroundColor: "#121212",
          flexGrow: 1,
          marginRight: {
            small: smallFormWidth,
            large: largeFormWidth,
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IframeRenderer isIFrameLoaded={isIFrameLoaded} handleLoad={handleLoad}  landingPageHtml={location.state.url}/>
        {
          !isIFrameLoaded &&
          <Stack
            sx={{
              height: "100%",
              width: "100%",
              padding: 3,
              flexDirection: {
                large: "row",
                small: "column",
              },
            }}
          >
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{
                bgcolor: grey[900],
                height: {
                  large: "100%",
                  small: "50%",
                },
                width: {
                  large: "50%",
                  width: "100%",
                },
                marginRight: {
                  large: 1,
                  small: 0,
                },
                marginBottom: {
                  large: 0,
                  small: 1,
                },
              }}
            />
            <Stack
              spacing={2}
              sx={{
                width: {
                  large: "50%",
                  small: "100%",
                },
                height: {
                  large: "100%",
                  small: "50%",
                },
                marginLeft: {
                  large: 1,
                  small: 0,
                },
                marginTop: {
                  large: 0,
                  small: 1,
                },
              }}
            >
              <Skeleton
                animation="wave"
                variant="rectangular"
                height="50%"
                width="100%"
                sx={{ bgcolor: grey[900] }}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                height="50%"
                width="100%"
                sx={{ bgcolor: grey[900] }}
              />
            </Stack>
          </Stack>
        }
        {/* <iframe
          id="exp-frame"
          src={location.state.url}
          allowfullscreen
          style={{
              width: '100%',
              height: '100%',
          }}
        >
          Loading…
        </iframe> */}
      </Box>

      <Stack
        direction="column"
        sx={{
          position: "fixed",
          right: 0,
          width: {
            small: smallFormWidth,
            large: largeFormWidth,
          },
          zIndex: 1,
          height: "inherit",
          transition: "0.5s",
        }}
      >
        <Box sx={{ backgroundColor: "white" }}>
          <IconButton onClick={handleOpenForm}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
        {/* <iframe
          id="data-form"
          src={"../forms/mathematics/probability.html"}
          frameborder="0"
          width="100%"
          style={{ flexGrow: 1 }}
        >
          Loading…
        </iframe> */}
        <Spreadsheet data={data} onChange={setData} className="mx-5" />
      </Stack>

      <Button
        variant="contained"
        startIcon={<ArrowBackIos />}
        onClick={handleOpenForm}
        sx={{
          display: isOpen ? "none" : "block",
        }}
      ></Button>
    </Stack>
  );
};

export default Experiment;
