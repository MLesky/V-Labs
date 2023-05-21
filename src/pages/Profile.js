import React from "react";
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

export default function ProfilePage() {
  const series = [70]; //70 percent
  const options = {
    labels: ["Progress"], //label of this diagram
  };

  const subjects = [
    {
      subject: "Biology",
      experiments: [
        {
          experiment: "One",
          progress: getRandomNumber(),
        },

        {
          experiment: "One",
          progress: getRandomNumber(),
        },

        {
          experiment: "One",
          progress: getRandomNumber(),
        },

        {
          experiment: "One",
          progress: getRandomNumber(),
        },
      ],
    },
    {
      subject: "Chemistry",
      experiments: [
        {
          experiment: "One",
          progress: getRandomNumber(),
        },

        {
          experiment: "One",
          progress: getRandomNumber(),
        },

        {
          experiment: "One",
          progress: getRandomNumber(),
        },

        {
          experiment: "One",
          progress: getRandomNumber(),
        },
      ],
    },
    {
      subject: "Physics",
      experiments: [
        {
          experiment: "One",
          progress: getRandomNumber(),
        },

        {
          experiment: "One",
          progress: getRandomNumber(),
        },

        {
          experiment: "One",
          progress: getRandomNumber(),
        },

        {
          experiment: "One",
          progress: getRandomNumber(),
        },

        {
          experiment: "One",
          progress: getRandomNumber(),
        },
      ],
    },
  ];

  const favourite = [
    {
      experiment: "One",
      progress: getRandomNumber(),
    },

    {
      experiment: "One",
      progress: getRandomNumber(),
    },

    {
      experiment: "One",
      progress: getRandomNumber(),
    },

    {
      experiment: "One",
      progress: getRandomNumber(),
    },

    {
      experiment: "One",
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
                <p className="text-muted mb-1">Arrey Ndang</p>
                <p className="text-muted mb-4">Advanced Level</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
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
                      Arrey Ndang
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
                      arreyndang@gmail.com
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
                      Advanced Level
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
                      Biology, Chemistry, Physics
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
                      Monday, May 15 2023
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
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Lab 1
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar
                        width={getRandomNumber()}
                        valuemin={0}
                        valuemax={100}
                      />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Lab 2
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar
                        width={getRandomNumber()}
                        valuemin={0}
                        valuemax={100}
                      />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Lab 3
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar
                        width={getRandomNumber()}
                        valuemin={0}
                        valuemax={100}
                      />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Lab 4
                    </MDBCardText>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Lab 5
                    </MDBCardText>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Lab 4
                    </MDBCardText>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Lab 5
                    </MDBCardText>
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
