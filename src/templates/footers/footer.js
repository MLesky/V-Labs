import { Typography, Box } from "@mui/material";
import Title from "../../assets/title";

const Footer = () => {
    return ( 
        <Box sx={{
            width: '100%',
            backgroundColor: '#D2D2D2',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
        }}>
            <Typography variant="h5" color='#353535'>{ Title }</Typography>
        </Box>
     );
}
 
export default Footer;