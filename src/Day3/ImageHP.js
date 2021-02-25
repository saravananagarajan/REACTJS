import React from 'react'

const ImageHP = ({imgUrl}) => {
    return (
        <div>
            <img 
                src={imgUrl}
                alt = ""
                width="200px"
            />
        </div>
    )
}

export default ImageHP; 
