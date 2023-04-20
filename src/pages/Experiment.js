import React from "react"
import {useLocation} from 'react-router-dom';

const Experiment = () => {
    const location = useLocation();

    return(
        <div>
            <h1>The Experiment</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <iframe src={location.state.url}
                        width="800"
                        height="600"
                        allowfullscreen>
                    Loading…
                </iframe>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdZZF_u1-LyokRBaPwryO5eKcW4OdT-BlfBTSKlA07Z6X-2JQ/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    )
}

export default Experiment