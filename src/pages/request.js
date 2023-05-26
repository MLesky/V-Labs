import {
  Box,
  Button,
  Paper,
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

const tableStyle = {
  paddingY: 3,
  paddingX: 2,
};

const requests = [
  {
    message:
      "An experiment to measure the gravitationl pull of objects on different surfaces",
    subject: "Physics",
    level: "Advanced Level",
    dateRequested: "12-03-2023",
    status: "Pending",
  },

  {
    message:
      "An experiment to measure the gravitationl pull of objects on different surfaces",
    subject: "Physics",
    level: "Advanced Level",
    dateRequested: "14-02-2023",
    status: "Completed",
  },

  {
    message:
      "An experiment to measure the gravitationl pull of objects on different surfaces",
    subject: "Physics",
    level: "Advanced Level",
    dateRequested: "12-21-2023",
    status: "Declined",
  },

  {
    message:
      "An experiment to measure the gravitationl pull of objects on different surfaces",
    subject: "Physics",
    level: "Advanced Level",
    dateRequested: "02-23-2023",
    status: "Pending",
  },

  {
    message:
      "An experiment to measure the gravitationl pull of objects on different surfaces",
    subject: "Biology",
    level: "Ordinary Level",
    dateRequested: "12-03-2023",
    status: "Declined",
  },
];

const RequestPage = () => {
  return (
    <Box sx={{backgroundColor: '#f4f4f4'}}>
      <Typography
        variant="h5"
        textTransform="uppercase"
        sx={{ color: "#545454", textAlign: "center", paddingTop: 2 }}
      >
        Request
      </Typography>
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
        {requests.map((request) => (
          <TableContainer
            sx={{
              maxWidth: 800,
              margin: {
                large: 3,
                small: 1,
              },
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
                  <TableCell>{request.level}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Date Requested</TableCell>
                  <TableCell>{request.dateRequested}</TableCell>
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
                      <Typography variant='caption' color={request.status === 'Completed' ? green[500] : request.status === 'Declined' ? 'error' : ''}>{request.status}</Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        color="error"
                        sx={{ textTransform: "lowercase" }}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        ))}
      </Stack>
    </Box>
  );
};

export default RequestPage;
