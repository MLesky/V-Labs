import { Stack, Box, Typography, Button } from "@mui/material";
import scienceExp from "../assets/images/undraw_science_re_mnnr.svg";
import scienceLab from "../assets/images/medical-laboratory.jpg";
import { Footer } from "../components";
import blackStudents from "../assets/images/study-group-african-people.jpg";

function HomePage() {
  const subjects = [
    { title: "Chemistry", image: "lens.jpg" },
    { title: "Biology", image: "lens.jpg" },
    { title: "Physics", image: "lens.jpg" },
    { title: "Geology", image: "lens.jpg" },
    { title: "Maths", image: "lens.jpg" },
  ];

  const imageDir = "../assets/images/";

  return (
    <Stack className="homePage">
      <Box
        sx={{
          backgroundImage: `url(${blackStudents})`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          padding: "70px",
          minHeight: "500px",
        }}
      >
        <Stack
          sx={{
            width: {
              small: "100%",
              large: "70%",
            },
            minWidth: {
              large: "200px",
            },
          }}
          spacing="30px"
        >
          <Typography
            sx={{ 
              textAlign: { 
                small: "center",
                large: "left",
              },
              fontSize: {
                large: '3em',
                small: '1.8em'
              }
            }}
            className="large-text"
            variant="h3"
            color="white"
          >
            {
              "An Interactive Virtual Laboratory For Simulating Scientific Experiments"
            }
          </Typography>

          <Typography sx={{ 
              textAlign: { 
                small: "center",
                large: "left",
              },
              fontSize: {
                large: '1.5em',
                small: '1em'
              }
            }} className="body-text" 
            variant="h6" 
            color="white">
            Teachers have access to simulation-specific tips and video primers,
            resources for teaching with simulations, and activities shared by
            our teacher community.
          </Typography>

          <Typography sx={{ 
              textAlign: { 
                small: "center",
                large: "left",
              },
              fontSize: {
                large: '1.5em',
                small: '1em'
              }
            }} 
            className="body-text" 
            variant="h6" 
            color="white">
            Students can carry out experiments at any time anywhere
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          padding: "50px",
          display: "flex",
          flexDirection: {
            small: 'column',
            large: 'row',
          },
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <img src={scienceExp} alt="science experiment" width="300px" />
        <Stack
          className="flex-column-on-small-screen"
          sx={{
            width: {
              small: '100%',
              large: '40%'
            }
          }}
          spacing="30px"
          justifyContent="center"
        >
          <Typography sx={{
            marginTop: {
              small: 7,
            },
            fontSize: {
              large: '2.2em',
              small: '1.8em'
            }
          }} 
          className="large-text" 
          variant="h4" 
          align="center">
            {"Teaching Resources, Activities, and Community"}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              color="primary"
              href="#"
              size="large"
              sx={{ borderWidth: "3px" }}
            >
              <Typography variant="h5">Register</Typography>
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box>
        <Typography
          variant="h6"
          align="center"
          sx={{
            backgroundColor: "#2196f3",
            color: "white",
            padding: "20px",
          }}
        >
          {"100 Simulations"}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        borderColor="primary"
      >
        {subjects.map((subject) => (
          <Button
            sx={{
              borderRadius: "50%",
            }}
          >
            <Stack
              sx={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                backgroundImage: `url(${scienceExp})`,
                backgroundBlendMode: "multiply",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                backgroundSize: "cover",
                margin: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" color="primary.dark">
                {subject.title}
              </Typography>
            </Stack>
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${scienceLab})`,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundBlendMode: "multiply",
          backgroundSize: "contain",
          padding: "70px",
          minHeight: "500px",
        }}
      >
        <Stack alignItems="end" justifyContent="end">
          <Stack spacing="30px" sx={{
            width: {
              small: "100%",
              large: "50%",
            },
            minWidth: {
              large: "200px",
            },
          }}>
            <Typography sx={{
              textAlign: { 
                small: "center",
                large: "right", 
              },
              fontSize: {
                large: '3em',
                small: '1.8em'
              }
            }} variant="h3" color="white" align="right">
              {"Shouldn't All Students Experience STEM?"}
            </Typography>

            <Typography sx={{
              textAlign: { 
                small: "center",
                large: "right",
              },
              fontSize: {
                large: '1.5em',
                small: '1em'
              }
            }} variant="h6" color="white">
              Learn how we are tackling challenges in STEM education, software
              development, and assistive technology.
            </Typography>

            <Typography sx={{
              textAlign: { 
                small: "center",
                large: "right",
              },
              fontSize: {
                large: '1.5em',
                small: '1em'
              }
            }} variant="h6" color="white" align="right">
              Access manuals and track your progress
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </Stack>
  );
}

export default HomePage;
