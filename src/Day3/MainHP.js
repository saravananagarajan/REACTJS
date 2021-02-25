import React from 'react'
import HeadPhoneList from './HeadPhoneList';
import ImageHP from './ImageHP'
import PriceHP from './PriceHP'
import TitleHP from './TitleHP'

const MainHP = () => {


    const headphones = [
        {
            image:"https://m.media-amazon.com/images/I/61SOGzRa7+L._AC_UY218_.jpg",
            title:"pTron Boom Ultima 4D Dual Driver, in-Ear Gaming Wired Headphones with in-line Mic, Volume Control & Passive Noise Cancelling Boom 3 Earphones - (Black)",
            price:"Rs.1200"
        },
        {
            image:"https://images-na.ssl-images-amazon.com/images/I/51I3LKQqqgL._SL1100_.jpg",
            title:"pTron Atom in-Ear Mono Bluetooth 5.0 Wireless Headphone, Built-in Mic, Clear Calls, Snug-fit Sweatproof Earbud, Voice Assistant",
            price:"Rs.1500"
        },
        {
            image:"https://images-na.ssl-images-amazon.com/images/I/612Uu9UxkiL._SL1100_.jpg",
            title:"pTron Bassbuds Urban in-Ear True Wireless Bluetooth 5.0 Headphones with Deep Bass",
            price:"Rs.1800"
        }
    ]

    return (
        <div>
            {headphones.map( (headphone, index) => (
                <HeadPhoneList {...headphone} key={index}/>
                // <div key={index}>
                //     <ImageHP imgUrl={headphone.image} />
                //     <TitleHP title={headphone.title} />
                //     <PriceHP price={headphone.price} />
                // </div>
            ))}
        </div>
    );
};

export default MainHP; 
