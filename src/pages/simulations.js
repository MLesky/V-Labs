import React from 'react'
import Typography from '@mui/material/Typography';
import CardI from '../components/Card'
import { Link } from 'react-router-dom';

import { IMAGES } from '../utils';
import { Box } from '@mui/material';

const Simulations = () => {

    return(
        <div>
            <div>
                <Box sx={
                    {  
                        display:"flex", 
                        flexWrap: 'wrap',
                        justifyContent: "space-around",
                        alignItems: "center",
                        marginTop: "5em"
                    }}>
                    <Link to={"/simulations/physics"} style={{
                        textDecoration: "none"
                    }}>
                        <CardI 
                            image={IMAGES.physics}
                            title={"Physics"}
                            description={"We offer a larger repertoire of physics experiments at secondary and high school"}
                        />
                    </Link>
                    <Link to={"/simulations/chemistry"} style={{
                        textDecoration: "none"
                    }}>
                        <CardI 
                            image={IMAGES.chemistry}
                            title={"Chemistry"}
                            description={"We offer a larger repertoire of Chemistry experiments at secondary and high school"}
                        />
                    </Link>
                    <Link to={"/simulations/biology"} style={{
                        textDecoration: "none"
                    }}>
                        <CardI 
                        image={IMAGES.biology}
                        title={"Biology"}
                        description={"We offer a larger repertoire of Biology experiments at secondary and high school"}
                    />
                    </Link>

                    <Link to={"/simulations/maths"} style={{
                        textDecoration: "none"
                    }}>
                        <CardI 
                        image={IMAGES.math}
                        title={"Math"}
                        description={"We offer a larger repertoire of Math experiments at secondary and high school"}
                    />
                    </Link>
                    
                </Box>
            </div>
        </div>
    )
}

export default Simulations