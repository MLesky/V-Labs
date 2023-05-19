import * as React from 'react';
import { ExpCard, CardI, SideBar } from '../components';
import { IMAGES } from '../utils';
import { Stack } from '@mui/material';

const Chemistry = () => {

    const experiments = [
        {image : '', title : 'Atomic Interactions: Basics', Description : 'How Atoms Interact'},
        {image : '', title : 'Rutherford Scattering', Description : ''},
        {image : '', title : 'Molecule Polarity', Description : 'Meauring Densities of Objects'},
        {image : '', title : 'Coulombs Law', Description : ''},
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
      <ExpCard 
            image={IMAGES.chemistry}
            url={"https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_en.html"}
            title = {"Diffusion"}
            description = {"Explain how two gases mix."}
        />
        <ExpCard 
            image={IMAGES.chemistry}
            url={""}
            title = {"States of Matter"}
            description = {"Convert a material from one state to another"}
        />

        {experiments.map((exp) => <CardI image={IMAGES.chemistry} title={exp.title} description={exp.description}/>)}
    </div>
      </Stack>  
       
    )
}

export default Chemistry