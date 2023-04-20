import * as React from 'react';
import ExpCard from '../components/ExpCard';

import { IMAGES } from '../utils';

export default function CheckboxListSecondary() {

  return (
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
    </div>
  );
}