import * as React from 'react';
import ExpCard from '../components/ExpCard';

import { IMAGES } from '../utils';

export default function CheckboxListSecondary() {

  return (
    <div>
        <ExpCard 
            image={IMAGES.physics}
            url={"https://phet.colorado.edu/sims/html/calculus-grapher/latest/calculus-grapher_en.html"}
            title = {"Graphing Calculator"}
            description = {"Math lab for graphing"}
        />
    </div>
  );
}