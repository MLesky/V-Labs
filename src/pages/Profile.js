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


export default function ProfilePage() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const user = useFirebaseAuth();
  const navigate = useNavigate();

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
          setUserData(userDoc.data());
        } else {
          console.log("User document not found");
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      } finally {
        setLoading(false);
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
    return <div>Loading...</div>;
  }

  if (!user) {
    // User is not authenticated, redirect to login page or show a message
    return <div></div>;
  }

  if (!userData) {
    // User data not found, show an error message
    return <div>User data not found</div>;
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
      <MDBContainer className="py-5">
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
          <MDBCol lg="4">
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
                  <MDBCard className="mb-4 mb-md-0">
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
                <MDBCard className="mb-4 mb-md-0">
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
      </MDBContainer>
    </section>
  );
}
