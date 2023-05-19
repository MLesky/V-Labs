import { Box, Typography, Button, Stack } from "@mui/material";

const experiments = ['01 - Calculus Grapher', '02 - My Solar System', '03 - Geometric Optics', '04 - Build a Nucleus', '05 - Density', '06 - Normal Modes', '07 - Collision Lab'] 
const SideBar = () => {
    return ( 
    <Stack spacing='20px' sx={{
        borderRight: '3px solid grey',
        width: '300px',
        height: 'calc(100vh-65px)',
    }}>
        <Typography variant="h6">Experiments From Manual</Typography>
        <Stack>
        {experiments.map((exp) => <Button variant='outlined'>{exp}</Button>)}
        </Stack>
    </Stack> 
    );
}
 
export default SideBar;