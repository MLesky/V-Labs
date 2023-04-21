import {useState, React} from "react"
import {useLocation} from 'react-router-dom';
import {
    Stack,
    Button,
  } from "@mui/material";

import {
    ArrowBackIos, ArrowForwardIos,
} from "@mui/icons-material";

const Experiment = () => {
    const location = useLocation();
    const [frameWidth, setFrameWidth] = useState('50%');
    const [formWidth, setFormWidth] = useState('45%');
    const [arrowIcon, setArrowIcon] = useState(<ArrowBackIos/>);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenForm = () => {
        if (isOpen){
            setFrameWidth('95%');
            setFormWidth('0');
            setArrowIcon(<ArrowForwardIos/>)
            setIsOpen(false);
        }

        else {
            setFrameWidth('50%');
            setFormWidth('45%');
            setArrowIcon(<ArrowBackIos/>)
            setIsOpen(true);
        }
    }
    
    return(
        <Stack direction='row' justifyContent='space-between' sx={{height: 'calc(100vh - 65px)', width: '100vw'}}>
            <iframe id="exp-frame" src={location.state.url}
                    width={frameWidth}
                    sx={{transition: '0.5s'}}
                        allowfullscreen>
                    Loading…
                </iframe>
                <iframe id="data-form" src="https://docs.google.com/spreadsheets/d/1-ZvTzBwOvr5uXwEXT9yFibuFR8HBtnM358LcWhioOzc/edit#gid=0" frameborder="0" marginheight="0" marginwidth="0" width={formWidth} style={{transition: '0.5s'}}>Loading…</iframe>
                <Button variant="contained" startIcon={arrowIcon} onClick={handleOpenForm}></Button>
        </Stack>
                
    )
}

export default Experiment