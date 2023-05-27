import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../firebaseConfig/firebase";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";

const CreateNewAccountModal = ({
  openModal,
  onCloseModal,
  switchToLogin,
  setIsAuth,
}) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    secondName: "",
    academicLevel: "",
    subjects: [],
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstNameError: "",
    secondNameError: "",
    academicLevelError: "",
    subjectsError: "",
    emailError: "",
    passwordError: "",
  });

  const [hasErrors, setHasErrors] = useState({
    firstNameHasError: false,
    secondNameHasError: false,
    academicLevelHasError: false,
    subjectsHasError: false,
    emailHasError: false,
    passwordHasError: false,
  });

  const handleFirstNameChange = (e) => {
    setUserInfo({ ...userInfo, firstName: e.target.value });
    setErrors({ ...errors, firstNameError: "" });
    setHasErrors({ ...hasErrors, firstNameHasError: false });
  };

  const handleSecondNameChange = (e) => {
    setUserInfo({ ...userInfo, secondName: e.target.value });
    setErrors({ ...errors, secondNameError: "" });
    setHasErrors({ ...hasErrors, secondNameHasError: false });
  };

  const handleAcademicLevelChange = (e) => {
    setUserInfo({ ...userInfo, academicLevel: e.target.value });
    setErrors({ ...errors, academicLevelError: "" });
    setHasErrors({ ...hasErrors, academicLevelHasError: false });
    console.log("User Academic Level: ", e.target.value);
  };

  const handleSubjectChange = (e) => {
    const subjects = document.getElementsByName("subjects");
    const selectedSubjects = Array.prototype.slice
      .call(subjects)
      .filter((subject) => subject.checked)
      .map((sub) => sub.value);

    setUserInfo({ ...userInfo, subjects: selectedSubjects });
    setErrors({ ...errors, subjectsError: "" });
    setHasErrors({ ...hasErrors, subjectsHasError: false });
  };

  const handleEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
    setErrors({ ...errors, emailError: "" });
    setHasErrors({ ...hasErrors, emailHasError: false });
  };

  const handlePasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
    setErrors({ ...errors, passwordError: "" });
    setHasErrors({ ...hasErrors, passwordHasError: false });
  };

  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Form Submition
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setRegisterError('');

    if (Object.values(userInfo).some((value) => value.length === 0)) {
      if (userInfo.password === "") {
        setErrors({ ...errors, passwordError: "Please enter password" });
        setHasErrors({ ...hasErrors, passwordHasError: true });
      } else if (userInfo.password.length < 8) {
        setErrors({
          ...errors,
          passwordError: "Password must be atleast 8 characters",
        });
        setHasErrors({ ...hasErrors, passwordHasError: true });
      }

      if (userInfo.email === "") {
        setErrors({ ...errors, emailError: "Please enter email" });
        setHasErrors({ ...hasErrors, emailHasError: true });
      }

      if (userInfo.subjects.length === 0) {
        setErrors({
          ...errors,
          subjectsError: "Please select atleast One subject",
        });
        setHasErrors({ ...hasErrors, subjectsHasError: true });
      }

      if (userInfo.academicLevel === "") {
        setErrors({
          ...errors,
          academicLevelError: "Please select academic level",
        });
        setHasErrors({ ...hasErrors, academicLevelHasError: true });
      }

      if (userInfo.secondName === "") {
        setErrors({ ...errors, secondNameError: "Please enter second name" });
        setHasErrors({ ...hasErrors, secondNameHasError: true });
      }

      if (userInfo.firstName === "") {
        setErrors({ ...errors, firstNameError: "Please enter first name" });
        setHasErrors({ ...hasErrors, firstNameHasError: true });
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          userInfo.email,
          userInfo.password
        );
        let user = userCredential.user;
        await setDoc(doc(database, "users", user.uid), {
          dateJoined: Timestamp.fromDate(new Date()),
          firstName: userInfo.firstName,
          secondName: userInfo.secondName,
          academicLevel: userInfo.academicLevel,
          subjects: userInfo.subjects,
        });
        const userRef = {...userInfo, ID: user.uid}
        console.log("User :", userRef);
        console.log("User created:", user.uid);
        setRegisterError('');
        setIsAuth(true);
        onCloseModal();
      } catch (error) {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          setRegisterError("Email is already in use");
        } else if (error.code === "auth/weak-password") {
          setRegisterError("Password is too weak");
        } else {
          setRegisterError("Registeration unsuccessful");
        }
      }
    }
  };

  return (
    <Modal
      open={openModal}
      close={onCloseModal}
      aria-labelledby="sign up modal"
      aria-describedby="modal for create account form"
      className="dialog-modal"
    >
      <Box
        className="modal-body"
        component="form"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <Stack spacing={2}>
          <Typography variant="h5" align="center">
            Create New Account
          </Typography>
          <TextField
            required
            id="first-name"
            label="Enter First Name"
            type="text"
            variant="standard"
            margin="normal"
            value={userInfo.firstName}
            error={hasErrors.firstNameHasError}
            onChange={handleFirstNameChange}
            helperText={errors.firstNameError}
          />

          <TextField
            required
            id="last-name"
            label="Enter Last Name"
            type="text"
            variant="standard"
            margin="normal"
            value={userInfo.secondName}
            error={hasErrors.secondNameHasError}
            onChange={handleSecondNameChange}
            helperText={errors.secondNameError}
          />

          <TextField
            id="academic-level"
            label="Select Academic Level"
            variant="standard"
            color="primary"
            select
            required
            value={userInfo.academicLevel}
            error={hasErrors.academicLevelHasError}
            onChange={handleAcademicLevelChange}
            helperText={errors.academicLevelError}
          >
            <MenuItem value="primary">Primary Education</MenuItem>
            <MenuItem value="secondary">Form 1 - 3</MenuItem>
            <MenuItem value="ordinary">Ordinary Level</MenuItem>
            <MenuItem value="advance">Advanced Level</MenuItem>
            <MenuItem value="higher">Higher</MenuItem>
          </TextField>

          <FormControl
            component="fieldset"
            required
            error={hasErrors.subjectsHasError}
            value={userInfo.subjects}
            onChange={handleSubjectChange}
          >
            <FormLabel component="legend">
              Select Subject(s): {errors.subjectsError}
            </FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    name="subjects"
                    id="biology"
                    value="Biology"
                    checked={userInfo.subjects.includes("Biology")}
                  />
                }
                label="Biology"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    name="subjects"
                    id="chemistry"
                    value="Chemistry"
                    checked={userInfo.subjects.includes("Chemistry")}
                  />
                }
                label="Chemistry"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    name="subjects"
                    id="Geology"
                    value="Geology"
                    checked={userInfo.subjects.includes("Geology")}
                  />
                }
                label="Geology"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    name="subjects"
                    id="maths"
                    value="Maths"
                    checked={userInfo.subjects.includes("Maths")}
                  />
                }
                label="Maths"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    name="subjects"
                    id="physics"
                    value="Physics"
                    checked={userInfo.subjects.includes("Physics")}
                  />
                }
                label="Physics"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    name="subjects"
                    id="food-science"
                    value="Food Science"
                  />
                }
                label="Food Science"
              />
            </FormGroup>
          </FormControl>

          <TextField
            required
            id="email"
            label="Enter Email"
            type="email"
            variant="standard"
            margin="normal"
            value={userInfo.email}
            onChange={handleEmailChange}
            error={hasErrors.emailHasError}
            helperText={errors.emailError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            id="password"
            label="Enter Password"
            variant="standard"
            type={showPassword ? "text" : "password"}
            value={userInfo.password}
            onChange={handlePasswordChange}
            error={hasErrors.passwordHasError}
            helperText={errors.passwordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
          <Stack direction="row" justifyContent="space-between">
            <Button onClick={onCloseModal} variant="contained">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Create Account
            </Button>
          </Stack>
          <Box>
            <Typography align="center">
              <a href="#" style={{ color: "#2196f3" }} onClick={switchToLogin}>
                Login Instead
              </a>
            </Typography>
          </Box>
          {registerError && (
            <Typography align="center" color="error">
              {registerError}
            </Typography>
          )}
        </Stack>
      </Box>
    </Modal>
  );
};

export default CreateNewAccountModal;
