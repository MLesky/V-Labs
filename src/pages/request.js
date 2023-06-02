import { AllInclusive, ArrowDownward, ArrowUpward, Cancel, Check, MonitorWeightSharp, Pending, PendingActions, PendingSharp } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableRow,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../firebaseConfig/firebase";
import { useFirebaseAuth } from "../firebaseConfig/FirebaseAuthContext";
import { IMAGES } from "../utils";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const RequestPage = () => {
  const user = useFirebaseAuth();
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [showRequests, setShowRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // getDocs (requests)
  useEffect(() => {
    if (user) {
      const q = query(
        collection(database, "requests"),
        where("userID", "==", user.uid),
        orderBy("dateRequested", "asc"),
      );

      const sub = onSnapshot(
        q,
        (snapshot) => {
          const result = [];
          snapshot.docs.forEach((doc) => {
            result.push({
              ...doc.data(),
              dateRequested: doc.data().dateRequested.toDate(),
              id: doc.id,
            });
          });

          setRequests(result);
          setShowRequests(result);
          setIsLoading(false);
        },
        (error) => {
          console.log("Some error ", error);
        }
      );
    }
  }, [user]);

  const handleDeleteRequest = (requestId) => {
    try {
      const docRef = doc(database, 'requests', requestId);
      deleteDoc(docRef).then(() => {
        console.log(requestId, "deleted");
      });
    } catch (err) {
      console.log("An error occured:", err)
    }
  }

  const handleShowAll = (e) => {
    setShowRequests(requests);
  }

  const handleShowPending = (e) => {
    setShowRequests(requests.filter((request) => request.status === 'pending'));
    console.log('kjdsk', showRequests);
  }

  const handleShowDeclined = (e) => {
    handleShowAll();
    setShowRequests(requests.filter((request) => request.status === "declined"));
  }

  const handleShowCompleted = (e) => {
    setShowRequests(requests.filter((request) => request.status === 'completed'));
  }

  const handleSortAscending = (e) => {
    setShowRequests(showRequests.sort(function (a, b) {
      return a.dateRequested - b.dateRequested;
    }))
  }

  const handleSortDescending = (e) => {
    setShowRequests(showRequests.sort(function (a, b) {
      return a.dateRequested - b.dateRequested;
    }).reverse())
  }


  if (user) {
    return (
      <>
        {isLoading && (
          <Stack alignItems="center" spacing={0} sx={{ padding: 1 }}>
            <Skeleton height={60} sx={{ width: "100%", maxWidth: 900 }} />
            <Stack
              direction="row"
              width="100%"
              spacing={1}
              justifyContent="center"
              sx={{ overFlow: "auto" }}
            >
              <Skeleton height={60} width={100} />
              <Skeleton height={60} width={100} />
              <Skeleton height={60} width={100} />
              <Skeleton height={60} width={100} />
              <Skeleton height={60} width={60} />
            </Stack>
            <Stack width='100%' alignItems='center' spacing={-20} sx={{ marginTop: -10 }}>
              {[1, 1].map(() => <Skeleton sx={{
                maxWidth: 800,
                width: '100%',
                height: 500,
              }} />)}
            </Stack>
          </Stack>
        )}
        {!isLoading && (
          <Stack alignItems="center">
            <Typography
              variant="h5"
              textTransform="uppercase"
              sx={{ color: "#545454", textAlign: "center", paddingTop: 2 }}
            >
              Request
            </Typography>
            <ButtonGroup
              width="fit-content"
              variant="contained"
              sx={{ overFlow: "auto", marginY: 2 }}
            >
              <Button size="small" onClick={handleShowAll}>All</Button>
              <Button size="small" onClick={handleShowPending}>
                <Typography variant="caption" sx={{
                  display: {
                    large: 'block',
                    small: 'none',
                  }
                }}>Pending
                </Typography>
                <Pending sx={{
                  display: {
                    large: 'none',
                    small: 'block',
                  }
                }}/>
              </Button>
              <Button size="small" onClick={handleShowCompleted}>
                <Typography variant="caption" sx={{
                  display: {
                    large: 'block',
                    small: 'none',
                  }
                }}>Completed
                </Typography>
                <Check sx={{
                  display: {
                    large: 'none',
                    small: 'block',
                  }
                }}/>
              </Button>
              <Button size="small" onClick={handleShowDeclined}>
                <Typography variant="caption" sx={{
                  display: {
                    large: 'block',
                    small: 'none',
                  }
                }}>Declined
                </Typography>
                <Cancel sx={{
                  display: {
                    large: 'none',
                    small: 'block',
                  }
                }}/>
              </Button>
              <Button size="small" onClick={handleSortAscending}><ArrowUpward /></Button>
              <Button size="small" onClick={handleSortDescending}><ArrowDownward /></Button>
            </ButtonGroup>
            <Stack
              direction="row"
              justifyContent="space-around"
              flexWrap="wrap"
              sx={{
                marginX: {
                  large: 15,
                  small: 5,
                },
              }}
            >
              {showRequests.length === 0 ? (
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: "70vh", width: "100%" }}
                >
                  <img src={IMAGES.empty} alt="Empty" width={400} />
                  <Typography variant='h5'>You have no request</Typography>
                </Stack>
              ) : (
                showRequests.map((request) => (
                  <TableContainer
                    sx={{
                      maxWidth: 800,
                      margin: {
                        large: 3,
                        small: 1,
                      },
                      backgroundColor: '#f3f3f3',
                    }}
                    component={Paper}
                  >
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>Message</TableCell>
                          <TableCell>{request.message}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Subject</TableCell>
                          <TableCell>{request.subject}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Level</TableCell>
                          <TableCell>{request.academicLevel}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Date Requested</TableCell>
                          <TableCell>
                            {days[request.dateRequested.getDay()]}{" "}
                            {months[request.dateRequested.getMonth()]}{" "}
                            {request.dateRequested.getDate()}{" "}
                            {request.dateRequested.getFullYear()},{" "}
                            {request.dateRequested.getHours() % 12}:
                            {request.dateRequested.getMinutes()}:
                            {request.dateRequested.getSeconds()}{" "}
                            {request.dateRequested.getHours() > 12
                              ? "PM"
                              : "AM"}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell>Status</TableCell>
                          <TableCell>
                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Typography
                                variant="caption"
                                color={
                                  request.status === "completed"
                                    ? green[500]
                                    : request.status === "declined"
                                      ? "error"
                                      : ""
                                }
                              >
                                {request.status}
                              </Typography>
                              <Button
                                variant="outlined"
                                size="small"
                                color="error"
                                sx={{ textTransform: "lowercase" }}
                                onClick={() => handleDeleteRequest(request.id)}
                              >
                                Delete
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </TableContainer>
                ))
              )}
            </Stack>
          </Stack>
        )}
      </>
    );
  }
};

export default RequestPage;
