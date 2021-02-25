import React from 'react';


// const PrintComponent = (props) => {
//     return <h1>You Clicked {props.passCount} Times.</h1>
// }

const PrintComponent = ({passCount, title}) => {
    return <h1>You Clicked {passCount} Times. The title is {title}</h1>
}

export default PrintComponent;
