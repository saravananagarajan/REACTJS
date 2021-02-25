import React from 'react'
import ImageHP from './ImageHP'
import PriceHP from './PriceHP'
import TitleHP from './TitleHP'

const HeadPhoneList = ({image, title, price}) => {
    return (
        <div>
            <ImageHP imgUrl={image} />
            <TitleHP title={title} />
            <PriceHP price={price} />
        </div>
    )
}

export default HeadPhoneList
