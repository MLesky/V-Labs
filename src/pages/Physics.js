import React from "react"
import ExpCard from "../components/ExpCard"
import { IMAGES } from "../utils"

const Physics = ({image, name}) => {
    return(
        <div>
            <ExpCard image={IMAGES.physics} name={"Some Experiment"} />
        </div>
    )
}

export default Physics