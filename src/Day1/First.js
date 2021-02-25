import React from 'react';
import PrintComponent from './PrintComponent';


const First = () => {
    return <div>
        Hello First World! 
        <PrintComponent passCount='4' title="Hello First"/>
        </div>;
}

// useEffect(() => {
//     effect
//     return () => {
//         cleanup
//     }
// }, [input])

export default First;



