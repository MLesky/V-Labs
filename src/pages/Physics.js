import * as React from 'react';
import { ExpCard, CardI, SideBar } from '../components';
import { IMAGES } from '../utils';
import { Stack } from '@mui/material';
export default function CheckboxListSecondary() {

  const experiments = [
    {image : '', title : 'Geometric Options: Basics', Description : 'The Basics if Lenses'},
    {image : '', title : 'Build a Nucleus', Description : ''},
    {image : '', title : 'Density', Description : 'Meauring Densities of Objects'},
    {image : '', title : 'Vector Addition', Description : ''},
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
            image={IMAGES.physics}
            url={"https://phet.colorado.edu/sims/html/circuit-construction-kit-ac-virtual-lab/latest/circuit-construction-kit-ac-virtual-lab_en.html"}
            title = {"Circuit Construction Kit"}
            description = {"Circuit Construction Kit: AC - Virtual Lab"}
        />
        <ExpCard 
            image={IMAGES.physics}
            url={"https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher_en.html"}
            title = {"Graphing Calculator"}
            description = {"Math lab for graphing"}
        />

        {experiments.map((exp) => <CardI image={IMAGES.physics} title={exp.title} description={exp.description}/>)}
    </div>
  </Stack>
  );
}