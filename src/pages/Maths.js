import React from "react";
import ExpCard from '../components/ExpCard';
import Card from '../components/Card';
import { IMAGES } from '../utils';
import { Stack } from "@mui/material";
import SideBar from "../templates/headers/sidebar";

const Maths = () => {

    const experiments = [
        {image : '', title : 'Center and Variability', Description : 'Predict the effects of an outlier on both the mean and median', url : 'Predict the effects of an outlier on both the mean and median'},
        {image : '', title : 'Probability', Description : '', url : ''},
      ]

    return(
      <Stack direction='row'>
        <SideBar />
        <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}
    >
      {/* https://phet.colorado.edu/sims/html/circuit-construction-kit-ac-virtual-lab/latest/circuit-construction-kit-ac-virtual-lab_en.html */}
        {experiments.map((exp) => <ExpCard image={IMAGES.math} title={exp.title} description={exp.description} url={exp.url}/>)}
    </div>
      </Stack>  
      
    )
}

export default Maths