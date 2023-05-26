import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const RequestModal = ({ openModal, onCloseModal, isAuth }) => {
  // Form Submition
  const handleFormSubmit = () => {
    alert("Submitted");
  };

  return (
    <Modal
      open={openModal}
      onClose={onCloseModal}
      aria-labelledby="request modal"
      aria-describedby="modal for making request"
      className="dialog-modal"
    >
      <Box
        className="modal-body"
        component="form"
        noValidate
        onSubmit={handleFormSubmit}
      >
        <Stack spacing={2}>
          {isAuth && <Link to='./requests'>
            <Typography variant="h6" align="center" onClick={onCloseModal}>
            View All Requests
          </Typography>
          </Link>}
          <Typography variant="h5" align="center">
            Request For An Experiment
          </Typography>
          <TextField
            id="subject"
            label="Select Subject"
            variant="standard"
            color="primary"
            select
            required
          >
            <MenuItem value="biology">Biology</MenuItem>
            <MenuItem value="chemistry">Chemistry</MenuItem>
            <MenuItem value="geology">Geography</MenuItem>
            <MenuItem value="maths">Maths</MenuItem>
            <MenuItem value="physics">Physics</MenuItem>
          </TextField>

          <TextField
            required
            id="request-message"
            label="Request Message..."
            type="text"
            variant="standard"
            margin="normal"
            multiline
            maxRows={4}
          />

          {!isAuth && (
            <>
              <TextField
                id="academic-level"
                label="Select Academic Level"
                variant="standard"
                color="primary"
                select
                required
              >
                <MenuItem value="primary">Primary Education</MenuItem>
                <MenuItem value="secondary">Form 1 - 3</MenuItem>
                <MenuItem value="ordinary">Ordinary Level</MenuItem>
                <MenuItem value="advance">Advanced Level</MenuItem>
                <MenuItem value="higher">Higher</MenuItem>
              </TextField>
              <TextField
                id="request-email"
                label="Enter Email"
                type="text"
                variant="standard"
                margin="normal"
              />
            </>
          )}
          <Stack direction="row" justifyContent="space-between">
            <Button onClick={onCloseModal} variant="contained">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default RequestModal;
