import React from 'react'
import Typography from '@mui/material/Typography';
import CardI from '../components/Card'
import { Link } from 'react-router-dom';

import { IMAGES, Subjects } from '../utils';
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
                    {
                        Subjects.map(subject => (
                            <Link to={subject.goto} style={{
                                textDecoration: "none"
                            }}>
                                <CardI 
                                    image={subject.image}
                                    title={subject.name}
                                    description={"We offer a larger repertoire of physics experiments at secondary and high school"}
                                />
                            </Link>
                        ))
                    }
                </Box>
            </div>
        </div>
    )
}

export default Simulations