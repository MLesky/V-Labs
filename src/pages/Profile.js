import React, { useEffect, useState } from "react";
import { useFirebaseAuth } from "../firebaseConfig/FirebaseAuthContext";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Chart from "react-apexcharts";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { getAuth, signOut } from "@firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Skeleton, Box, Stack, Popover, Typography } from "@mui/material";


export default function ProfilePage() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const user = useFirebaseAuth();
  const navigate = useNavigate();
  const [popper, setPopper] = useState({
    isOpen: false,
    message: '', 
  });
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Fetch user data from the database
    const fetchUserData = async () => {
      try {
        // Access the Firestore instance
        const db = getFirestore();

        // Get the user document from the "users" collection using the user UID
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          // If the user document exists, set the userData state with its data
          setLoading(false)
          setUserData(userDoc.data());
        } else {
          setUserData(null);
          setPopper({message: "Error Fetching data", isOpen: true});
          console.log("User document not found");
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      } finally {
        
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  const series = [70]; //70 percent
  const options = {
    labels: ["Progress"], //label of this diagram
  };

  const handleLogout = (e) => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate('/');
      console.log("Logged Out");
    }).catch((error) => {
      console.log('An Error occured', error);
    });
  };

  if (loading) {
    // Loading user data, show a loading spinner or message
    return <>
      <Box sx={{paddingX: 2, paddingY: 5, maxWidth: 1175, marginX: 'auto'}}>
      <Skeleton height={90} width='100%' />
      <Stack sx={{
        flexDirection: {
          large: 'row',
          small: 'column'
        },
        justifyContent: {
          large: "space-between",
          small: 'center',
        }
      }}>
        <Stack spacing={-6} sx={{
          width: {
            large: '30%',
            small: '100%',
          },
        }}>
          <Stack alignItems='center' spacing={1}>
            <Skeleton variant="circular" width={150} height={150} sx={{marginTop: 5}}/>
            <Skeleton variant='text' width={120} sx={{fontSize: '1em'}}/>
            <Skeleton variant='text' width={200} sx={{fontSize: '1em'}}/>
            <Skeleton width={100} height={70}/>
          </Stack>
          <Stack alignItems='center' spacing={1}>
            <Skeleton width={300} height={400}/>
          </Stack>
        </Stack>

        <Stack spacing={-14} sx={{
          width: {
            large: '65%',
            small: '100%',
          },
          marginTop: 2,
        }}>
          <Stack  spacing={-1}>
          <Skeleton height={70} />
          <Skeleton height={70} />
          <Skeleton height={70} />
          <Skeleton height={70} />
          <Skeleton height={70} />
          </Stack>

          <Stack flexWrap='wrap' direction="row" sx={{
                        justifyContent: 'center',
                        alignItems: 'center'
          }}>
            <Skeleton height={700} width={310} sx={{marginX: 3}}/>
            <Skeleton height={700} width={310} sx={{
              display: {
                large: 'block',
                small: 'none',
              },
              marginX: 3,
            }}/>
          </Stack>
        </Stack>
      </Stack>
    </Box>;

    { count == 1 ?
      setTimeout(() => {
        if(!userData){
          setPopper({message: "Error Fetching data", isOpen: true})
        } else if(!user){
         setPopper({message: "Please login or create account to view profile", isOpen: true})
        } else {
          setPopper({message: '', isOpen: false});
        }
        setCount(count+1)
        console.log("Count is", count)
      }, 4000) : null }

    <Popover
      open={popper.isOpen}
      onClose={() => setPopper({isOpen: false, message: ''})}
      anchorReference="anchorPosition"
      anchorPosition={{top: 65, left: 20}}
      anchorOrigin={{vertical: 'top', horizonatal: 'center'}}
      transformOrigin={{vertical: 'top', horizonatal: 'center'}}
    >
      <Typography color='error' fontWeight='bold' paddingX={2} paddingY={1}>{popper.message}</Typography>
    </Popover>
    </>
  }
  
  const subjects = [
    {
      subject: "Biology",
      experiments: [
        {
          experiment: "Natural Selection: Basics",
          progress: getRandomNumber(),
        },

        {
          experiment: "Neuron",
          progress: getRandomNumber(),
        },

        {
          experiment: "Molecule Polarity",
          progress: getRandomNumber(),
        },

        {
          experiment: "Gene Expression",
          progress: getRandomNumber(),
        },
      ],
    },
    {
      subject: "Chemistry",
      experiments: [
        {
          experiment: "Atomic Interactions: Basics",
          progress: getRandomNumber(),
        },

        {
          experiment: "Rutherford Scattering",
          progress: getRandomNumber(),
        },

        {
          experiment: "Molecule Polarity",
          progress: getRandomNumber(),
        },

        {
          experiment: "Coulombs Law",
          progress: getRandomNumber(),
        },
      ],
    },
    {
      subject: "Physics",
      experiments: [
        {
          experiment: "Atomic Interactions: Basics",
          progress: getRandomNumber(),
        },

        {
          experiment: "Rutherford Scattering",
          progress: getRandomNumber(),
        },

        {
          experiment: "Molecule Polarity",
          progress: getRandomNumber(),
        },

        {
          experiment: "Coulombs Law",
          progress: getRandomNumber(),
        },
      ],
    },
  ];

  const favourite = [
    {
      experiment: "Natural Selection: Basics",
      progress: getRandomNumber(),
    },

    {
      experiment: "Neuron",
      progress: getRandomNumber(),
    },

    {
      experiment: "Atomic Interactions: Basics",
      progress: getRandomNumber(),
    },

    {
      experiment: "Rutherford Scattering",
      progress: getRandomNumber(),
    },
  ];

  function getRandomNumber() {
    return Math.floor(Math.random() * 21) + 80;
  }

  return (
    <section style={{ backgroundColor: "#eee" }}>
      {userData && <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href="#">Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4" className="d-flex flex-column align-items-center">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">{userData.firstName} {userData.secondName}</p>
                <p className="text-muted mb-4">{user.email}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn outline className="ms-1" onClick={handleLogout}>Log Out</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBCardText className="mb-4 h1">Trend</MDBCardText>
                <CalendarHeatmap
                  startDate={new Date("2016-01-01")}
                  endDate={new Date("2016-04-01")}
                  values={[
                    { date: "2016-01-01", count: 12 },
                    { date: "2016-01-22", count: 122 },
                    { date: "2016-01-30", count: 38 },
                  ]}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4 w-100">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.firstName} {userData.secondName}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Level</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.academicLevel}
                      <i class="fa fa-level-down" aria-hidden="true"></i>
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Subjects</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData && userData.subjects.join(", ")}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Date Joined</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {userData.dateJoined.toDate().toString().substring(0,15)}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              {subjects.map((subject) => (
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0 mx-auto">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        Completed {subject.subject} Experiments
                      </MDBCardText>
                      <Chart
                        type="radialBar"
                        series={[getRandomNumber() - 50]}
                        options={options}
                      />
                      {subject.experiments.map((experiment) => (
                        <>
                          <MDBCardText
                            className="mb-1"
                            style={{ fontSize: ".77rem" }}
                          >
                            {experiment.experiment}
                          </MDBCardText>
                          <MDBProgress className="rounded">
                            <MDBProgressBar
                              width={experiment.progress}
                              valuemin={0}
                              valuemax={100}
                            >
                              Accuracy: {experiment.progress}%
                            </MDBProgressBar>
                          </MDBProgress>
                        </>
                      ))}
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0 mx-auto">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      Favorite Experiments
                    </MDBCardText>
                    {favourite.map((experiment) => (
                        <>
                          <MDBCardText
                            className="mb-1"
                            style={{ fontSize: ".77rem" }}
                          >
                            {experiment.experiment}
                          </MDBCardText>
                          <MDBProgress className="rounded">
                            <MDBProgressBar
                              width={experiment.progress}
                              valuemin={0}
                              valuemax={100}
                            >
                              Accuracy: {experiment.progress}%
                            </MDBProgressBar>
                          </MDBProgress>
                        </>
                      ))}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>}
    </section>
  );
}
