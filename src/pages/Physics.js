import * as React from 'react';
import { ExpCard, CardI, SideBar } from '../components';
import { IMAGES } from '../utils';
import { Stack } from '@mui/material';

export default function Physics() {

  const experiments = [
    {image : '', title : 'Geometric Options: Basics', Description : 'The Basics if Lenses'},
    {image : '', title : 'Build a Nucleus', Description : ''},
    {image : '', title : 'Density', Description : 'Meauring Densities of Objects'},
    {image : '', title : 'Vector Addition', Description : ''},
    {image : '', title : 'Circuit Construction Kit: AC', Description : '', url:"https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_en.html"},
    {image : '', title : 'Normal Modes', Description : '', url:"https://phet.colorado.edu/sims/html/normal-modes/latest/normal-modes_en.html"}
  ]

  return (
    <Stack direction='row'>
    <SideBar />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
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

        {experiments.map((exp) => <ExpCard image={IMAGES.physics} title={exp.title} description={exp.description} url={exp.url}/>)}
    </div>
  </Stack>
  );
}