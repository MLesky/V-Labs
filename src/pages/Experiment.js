import { useState, React } from "react";
import { useLocation } from "react-router-dom";
import { Stack, Button, IconButton, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import Spreadsheet from "react-spreadsheet";

const Experiment = () => {
  const location = useLocation();
  const [smallFormWidth, setSmallFormWidth] = useState("0");
  const [largeFormWidth, setLargeFormWidth] = useState("0");
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState([
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  ]);

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
        <Box sx={{ transition: "0.5s", flexGrow: 1,
         marginRight: {
            small: smallFormWidth,
            large: largeFormWidth,
         } }}>
      <iframe
        id="exp-frame"
        src={location.state.url}
        allowfullscreen
        style={{
            width: '100%',
            height: '100%',
        }}
      >
        Loading…
      </iframe>
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
          transition: "0.5s"
        }}
      >
        <Box sx={{ backgroundColor: "white" }}>
          <IconButton onClick={handleOpenForm}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
        {/* <iframe
          id="data-form"
          src="https://docs.google.com/spreadsheets/d/1-ZvTzBwOvr5uXwEXT9yFibuFR8HBtnM358LcWhioOzc/edit#gid=0"
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
            display: isOpen ? 'none' : 'block',
        }}
      ></Button>
    </Stack>
  );
};

export default Experiment;
