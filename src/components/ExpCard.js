import React from "react"

const ExpCard = ({image, name}) => {
    return(
        <div>
            <div className='card'>
                <img src={image} alt={name} width={50} loading='lazy' />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default ExpCard