import * as React from 'react';
import { ExpCard, CardI, SideBar } from '../components';
import { IMAGES } from '../utils';
import { Stack } from '@mui/material';
const Maths = () => {

    const experiments = [
        {image : '', title : 'Center and Variability', description : 'Predict the effects of an outlier on both the mean and median', url : ''},
        {image : '', title : 'Probability', description : '', url : ''},
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