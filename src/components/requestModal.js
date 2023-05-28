import {
  AccountCircle,
  DoorBackOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  LinearProgress,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { addDoc, collection, setDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { database } from "../firebaseConfig/firebase";
import { green } from "@mui/material/colors";
import { useFirebaseAuth } from "../firebaseConfig/FirebaseAuthContext";

const errorText = '<span class="notranslate">​</span>';

const RequestModal = ({ openModal, onCloseModal }) => {
  const user = useFirebaseAuth();
  const [request, setRequest] = useState({
    message: "",
    subject: "",
    email: "",
    academicLevel: "",
  });

  const [errors, setErrors] = useState({
    messageError: "",
    messageHasError: false,
    subjectError: "",
    subjectHasError: false,
  });

  const [uploadState, setUploadState] = useState({
    message: "",
    hasError: false,
    loading: false,
  });

  const handleSubjectChange = (e) => {
    setRequest({ ...request, subject: e.target.value });
    setErrors({ ...errors, subjectError: "", subjectHasError: false });
  };

  const handleMessageChange = (e) => {
    setRequest({ ...request, message: e.target.value });
    setErrors({ ...errors, messageError: "", messageHasError: false });
  };

  const handleLevelChange = (e) => {
    setRequest({ ...request, academicLevel: e.target.value });
  };

  const handleEmailChange = (e) => {
    setRequest({ ...request, email: e.target.value });
  };

  // Form Submition
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setUploadState({
      message: "",
      hasError: false,
      loading: false,
    });

    if (request.subject === "" || request.message === "") {
      if (request.message === "") {
        setErrors({
          ...errors,
          messageError: "Please enter request message",
          messageHasError: true,
        });
      }
      if (request.subject === "") {
        setErrors({
          ...errors,
          subjectError: "Please select subject",
          subjectHasError: true,
        });
      }
    } else {
      // Adding request document
      try {
        setUploadState({ ...uploadState, loading: true });
        const docRef = await addDoc(collection(database, "requests"), {
          userID: user != null ? user.uid : 'Anonymous',
          dateRequested: Timestamp.fromDate(new Date()),
          ...request,
          email : user != null ? user.email : request.email,
          status: 'pending',
        });

        setUploadState({
          message: "Request Sent!",
          loading: false,
          hasError: false,
        });
        setRequest({
          message: "",
          subject: "",
          email: "",
          academicLevel: "",
        });
      } catch (error) {
        console.log("error => :", error);
        setUploadState({
          message: "An Error Occured!",
          loading: false,
          hasError: true,
        });
      }
    }
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
        onSubmit={handleFormSubmit}
        noValidate
      >
        <Stack spacing={2}>
          {user && (
            <Link to="./requests">
              <Typography variant="h6" align="center" onClick={onCloseModal}>
                View All Requests
              </Typography>
            </Link>
          )}
          <Typography variant="h5" align="center">
            Request For An Experiment
          </Typography>
          <TextField
            id="request-subject"
            label="Select Subject"
            variant="standard"
            color="primary"
            select
            required
            value={request.subject}
            helperText={errors.subjectError}
            error={errors.subjectHasError}
            onChange={handleSubjectChange}
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
            value={request.message}
            helperText={errors.messageError}
            error={errors.messageHasError}
            onChange={handleMessageChange}
          />
          <TextField
                id="request-level"
                label="Select Academic Level"
                variant="standard"
                color="primary"
                select
                value={request.academicLevel}
                onChange={handleLevelChange}
              >
                <MenuItem value="primary">Primary Education</MenuItem>
                <MenuItem value="secondary">Form 1 - 3</MenuItem>
                <MenuItem value="ordinary">Ordinary Level</MenuItem>
                <MenuItem value="advance">Advanced Level</MenuItem>
                <MenuItem value="higher">Higher</MenuItem>
              </TextField>

          {!user && (
              <TextField
                id="request-email"
                label="Enter Email"
                type="email"
                variant="standard"
                margin="normal"
                value={request.email}
                onChange={handleEmailChange}
              />
          )}

          {uploadState.loading ? <LinearProgress /> : <Typography
              color={uploadState.hasError ? "error" : green[700]}
              textAlign="center"
            >
              {uploadState.message}
            </Typography>}
          

          <Stack direction="row" justifyContent="space-between">
            <Button
              onClick={onCloseModal}
              variant="contained"
              disabled={uploadState.loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={uploadState.loading}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default RequestModal;
