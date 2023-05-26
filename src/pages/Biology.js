import * as React from 'react';
import { ExpCard, CardI, SideBar } from '../components';
import { IMAGES } from '../utils';
import { Stack } from '@mui/material';


export default function Biology() {

  const experiments = [
    {image : '', title : 'Natural Selection: Basics', Description : 'The Basics if Selection'},
    {image : '', title : 'Neuron', Description : ''},
    {image : '', title : 'Molecule Polarity', Description : 'Meauring Densities of Objects'},
    {image : '', title : 'Gene Expression', Description : ''},
  ]

  return (
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
            image={IMAGES.biology}
            url={"https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_en.html"}
            title = {"pH Scale"}
            description = {"Determine if a liquid is acidic, basic, or neutral"}
        />
        <ExpCard 
            image={IMAGES.chemistry}
            url={"https://phet.colorado.edu/sims/html/color-vision/latest/color-vision_en.html"}
            title = {"Color Vision"}
            description = {"Math lab for graphingDetermine what color the person sees for various combinations of red, green, and blue light."}
        />

        {experiments.map((exp) => <CardI image={IMAGES.biology} title={exp.title} description={exp.description}/>)}
    </div>
  </Stack>  

  );
}