import React from "react"
import {useLocation} from 'react-router-dom';

const Experiment = () => {
    const location = useLocation();

    return(
        <div>
            <h1>The Experiment</h1>
            <iframe src={location.state.url}
                    width="800"
                    height="600"
                    allowfullscreen>
            </iframe>
        </div>
    )
}

export default Experiment