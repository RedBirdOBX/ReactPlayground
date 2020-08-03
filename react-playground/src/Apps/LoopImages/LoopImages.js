// challenge:  lopp thru a predefined number of interations and render img controls.

// 1) use a for loop for one version - done

// 2) use a .map() function for the second

import React from 'react';
import Image from './Image';

const loops = 3;
let images = [];

for (let index = 1; index <= loops; index++)
{
    images.push(<Image key={index} />)
}

class LoopImages extends React.Component
{
    render()
    {
        return(
            <div>
                {images}
            </div>
        );
    }
}

export default LoopImages;