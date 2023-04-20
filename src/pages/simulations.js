import React from 'react'
import Typography from '@mui/material/Typography';
import CardI from '../components/Card'
import { Link } from 'react-router-dom';

import { IMAGES } from '../utils';

const Simulations = () => {

    return(
        <div>
            <div>
                <div style={
                    {  
                        display:"flex", 
                        flexDirection:"row",
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
                    <CardI 
                        image={IMAGES.biology}
                        title={"Biology"}
                        description={"We offer a larger repertoire of Biology experiments at secondary and high school"}
                    />
                    <CardI 
                        image={IMAGES.math}
                        title={"Math"}
                        description={"We offer a larger repertoire of Math experiments at secondary and high school"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Simulations