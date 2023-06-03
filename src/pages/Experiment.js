import { useState, React, useRef } from "react";
import { useLocation, useRouteError, useSearchParams } from "react-router-dom";
import { Stack, Button, IconButton, Box, Skeleton, Dialog, Typography, Modal } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import IframeRenderer from "../components/IframeRenderer"
// import { useIsIFrameLoaded } from "../hooks/iframeIsLoaded"
import CircularProgress from '@mui/material/CircularProgress';
import { areaDiffusion, areaDensity, areaState } from "../utils";
import Spreadsheet from "react-spreadsheet";
import { grey } from "@mui/material/colors";
import { useFirebaseAuth } from "../firebaseConfig/FirebaseAuthContext";

const Experiment = ({ hideLoader }) => {
  const user = useFirebaseAuth();
  const location = useLocation();
  const searchParams = useSearchParams();
  const [smallFormWidth, setSmallFormWidth] = useState("0");
  const [largeFormWidth, setLargeFormWidth] = useState("0");
  const [isOpen, setIsOpen] = useState(false);
  const [isIFrameLoaded, setIsIFrameLoaded] = useState(false);
  const [messageDialog, setMessageDialog] = useState({
    isOpen: false,
    message: '',
    isError: false,
  })

  // const iframeRef = useRef(null);
  // const isIFrameLoaded = useIsIFrameLoaded(iframeRef);
  const handleSubmitValues = () => {
    if (user === undefined || !user) {
      setMessageDialog({ message: "Please Login to save values", isError: true, isOpen: true })
    } else {
      setMessageDialog({ message: "Values Saved", isError: false, isOpen: true })
    }
  }

  const handleLoad = () => {
    setTimeout(() => setIsIFrameLoaded(!isIFrameLoaded), 2000);
    console.log("loaded")
  }

  function wasteTime() {
    return (
      <>
        <CircularProgress />
      </>
    )
  }

  const [data, setData] = useState(location.state.experiment === 'Density' ? areaDensity : location.state.experiment === 'Diffusion' ? areaDiffusion : areaState)

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
        <IframeRenderer isIFrameLoaded={isIFrameLoaded} handleLoad={handleLoad} landingPageHtml={location.state.url} />
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
        <Box sx={{ overflow: 'auto' }}>
          <div style={{ paddingLeft: 3 }}>
            <div class="container-fluid" style={{ display: location.state.experiment == 'Density' ? 'block' : 'none' }}>
              <div class="row">
                <div id="main" class="col-12 col-md-9">
                  <div id="States of Matter">
                    <h2>Density</h2>
                    <h3>Learning Goals</h3>
                    <ul>
                      <li>Describe a molecular model for solids, liquids, and gases.</li>
                      <li>Extend this model to phase changes.</li>
                      <li>Describe how heating or cooling changes the behavior of the molecules.</li>
                      <li>Describe how changing the volume can affect temperature, pressure, and state.</li>
                      <li>Relate a pressure-temperature diagram to the behavior of molecules.</li>
                      <li>Interpret graphs of interatomic potential.</li>
                      <li>Describe how forces on atoms relate to the interaction potential.</li>
                      <li>Describe the physical meaning of the parameters in the Lennard-Jones potential, and how this relates to the molecule behavior.</li>
                    </ul>
                    <p>Here are the steps to perform the Experiment on Density:</p>
                  <ol>
                    <h3>How to experiment</h3>
                    <li>Identify an unknown material by calculating its density and comparing to a table of known densities.</li>
                    <li>Students do not need to be told to put the block in the water; it is often their first move.</li>
                    <li>Students who do not already know the density of water can figure it out by playing with the sim.</li>
                    <li>Some students notice that when objects float, they displace their mass, but when objects sink, they displace their volume. </li>
                    <li>Students learn that density is what determines whether an object sinks or floats.</li>
                    <li>Students are sometimes confused by the neutrally buoyant behavior of the blue block in the Compare</li>
                    <li>Screen, “Same Mass” option; later, they discover the block has the density of water.</li>
                    <li>Students discover that they can measure a block's volume by placing it in the pool, but some may not
                      realize the block must be fully submerged in the water to measure the volume correctly.</li>
                  </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid" style={{ display: location.state.experiment == 'Diffusion' ? 'block' : 'none' }}>
              <div class="row">
                <div id="main" class="col-12 col-md-9">
                  <div id="diffusion">
                    <h2>Diffusion of Liquids</h2>
                    <p>The Diffusion simulation allows students to explore how two gases mix. Experiment with concentration,
                      temperature, mass, and radius to determine how these factors affect the rate of diffusion. Use the Center
                      of Mass and Particle Flow Rate representations to determine when the system reaches equilibrium.</p>

                    <ul>
                      <h3>Insights into Student Use</h3>
                      <li>Students may take some time to discover that they can quickly change values by holding down the
                        arrow buttons. </li>
                    </ul>
                    <ol>
                      <p>Materials:Two beakers, Food coloring (two different colors), Stirring rod, Water.</p>
                      <p>Procedures</p>
                      <li>Fill two beakers with water.</li>
                      <li>Add a few drops of food coloring to each beaker, using different colors for each beaker.</li>
                      <li>Gently stir the water in each beaker to ensure the food coloring is evenly distributed throughout the water.</li>
                      <li>Place one beaker next to the other, but do not mix the water between the two beakers.</li>
                      <li>Observe the beakers over time and record any changes you observe.</li>
                      <p>Observation</p>
                      <p>As time progresses, you should observe that the food coloring from each beaker begins to diffuse into the water in the other beaker. Over time, you should see a concentration gradient form as the food coloring becomes more evenly distributed throughout both beakers.</p>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid" style={{ display: location.state.experiment == 'States of Matter' ? 'block' : 'none' }}>
              <div class="row">
                <div id="main" class="col-12 col-md-9">
                  <div id="States of Matter">
                    <h2>States of Matter</h2>
                    <h3>Learning Goals</h3>
                    <ul>
                      <li>Describe how the concept of density relates to an object's mass and volume.</li>
                      <li>Explain how objects of similar mass can have differing volume, and how objects of similar
                        volume can have differing mass.</li>
                      <li>Explain why changing an object's mass or volume does not affect its density (ie, understand
                        density as an intensive property).</li>
                      <li>Measure the volume of an object by observing the amount of fluid it displaces.</li>
                      <li>Identify an unknown material by calculating its density and comparing to a table of known
                        densities.</li>
                    </ul>
                    <p>Here are the steps to perform the Experiment on the States of Matter:</p>
                    <ol>
                      <p>Aim:o investigate the three states of matter (solid, liquid, gas) and observe how they can
                        change from one state to another.</p>
                      <p>Materials:Ice cubes
                        Water,
                        Heat source (e.g. hot plate or stove),
                        Glass beaker,
                        Thermometer,
                        Measuring cup,
                        Plastic bag</p>
                      <p>Procedures</p>
                      <li>Fill a glass beaker with water and place a thermometer in the water to measure the
                        temperature.</li>
                      <li>Place a few ice cubes in the water and observe what happens to the ice as it comes into
                        contact with the water.</li>
                      <li>Heat the beaker on a heat source until the water begins to boil. Observe the steam that is
                        produced as the water changes from a liquid to a gas</li>
                      <li>Pour some of the water into a plastic bag and seal the bag tightly. Place the bag in the
                        freezer and observe what happens to the water as it changes from a liquid to a solid.</li>
                      <p>Observation</p>
                      <p>When the ice cubes are added to the water, they begin to melt and turn into liquid water. As
                        the water is heated, it begins to boil and produce steam as it changes from a liquid to a
                        gas. When the water in the plastic bag is frozen, it turns into a solid block of ice.</p>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Spreadsheet data={data} onChange={setData} className="mx-5" />
        </Box>
        <Box sx={{ margin: '30px auto' }}><Button onClick={handleSubmitValues} variant="contained">Submit</Button></Box>
      </Stack>

      <Modal
        open={messageDialog.isOpen}
        onClose={() => setMessageDialog({ message: '', isOpen: false, isError: false })}
        sx={{ maxWidth: '500px', width: 'fit-content' }}
        className="dialog-modal"
      >
        <Box className="modal-body"><Typography textAlign='center' sx={{ padding: 2, color: messageDialog.isError ? 'error.main' : 'success.main' }}>{messageDialog.message}</Typography></Box>
      </Modal>

      <Button onClick={handleOpenForm} sx={{
        backgroundColor: 'primary.main',
        width: '40px !important',
        marginTop: 1,
        display: {
          large: 'none',
          small: isOpen ? "none" : "block",
        },
        position: 'absolute',
        right: 0,
      }}>
        <ArrowBackIos sx={{ color: "white" }} />
      </Button>

      <Button
        variant="contained"
        startIcon={<ArrowBackIos />}
        onClick={handleOpenForm}
        sx={{
          display: {
            large: isOpen ? "none" : "block",
            small: 'none',
          }
        }}
      ></Button>
    </Stack>
  );
};

export default Experiment;
