import * as React from 'react';
import { ExpCard, CardI, SideBar } from '../components';
import { IMAGES } from '../utils';
import { Stack } from '@mui/material';
import Images from './images';

const Chemistry = () => {

  const experiments = [
    { image: '', title: 'Atomic Interactions: Basics', Description: 'How Atoms Interact' },
    { image: '', title: 'Rutherford Scattering', Description: '' },
    { image: '', title: 'Molecule Polarity', Description: 'Meauring Densities of Objects' },
    { image: '', title: 'Coulombs Law', Description: '' },
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
          image={Images.diffusion}
          url={"https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_en.html"}
          title={"Diffusion"}
          description={"Explain how two gases mix."}
        />

        <ExpCard
          image={Images.density}
          url={"https://phet.colorado.edu/sims/html/density/latest/density_all.html"}
          title={"Density"}
          description={"Describe how the concept of density relates to an object's mass and volume."}
        />

        <ExpCard
          image={Images.matter}
          url={"https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_en.html"}
          title={"States of Matter"}
          description={"Convert a material from one state to another"}
        />

        <ExpCard
          image={Images.phscale}
          url={"https://phet.colorado.edu/sims/html/ph-scale-basics/latest/ph-scale-basics_en.html"}
          title={"pH Scale: Basics"}
          description={"Determine if a solution is acidic, basic or neutral"}
        />

        <ExpCard
          image={Images.molecules}
          url={"https://phet.colorado.edu/sims/html/molecules-and-light/latest/molecules-and-light_en.html"}
          title={"Molecules and Light"}
          description={"Explore how light interacts with molecules in our atmosphere"}
        />

        <ExpCard
          image={Images.equations}
          url={"https://phet.colorado.edu/sims/html/balancing-chemical-equations/latest/balancing-chemical-equations_en.html"}
          title={"Balancing Chemical Equations"}
          description={"Balance a chemical equation."}
        />

        <ExpCard
          image={Images.acidBase}
          url={""}
          title={"Acid-Base Solutions"}
          description={"Convert a material from one state to another"}
        />

        <ExpCard
          image={Images.states2}
          url={"https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_en.html"}
          title={"States of Matter"}
          description={"Given acids or bases at the same concentration, demonstrate understanding of acid and base strength"}
        />

      </div>
    </Stack>

  )
}

export default Chemistry