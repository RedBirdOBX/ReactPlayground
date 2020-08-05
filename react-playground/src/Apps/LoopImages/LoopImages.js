// challenge:  lopp thru a predefined number of interations and render img controls.

import React from 'react';
import Image from './Image';

const loops = 3;
let images = [];


// 1) use a for loop for one version - done
for (let index = 1; index <= loops; index++)
{
    images.push(<Image key={index} />)
}


// 2) use a .map() function for the second
let images2 = images.map((img) => { return img; });


class LoopImages extends React.Component
{
    render()
    {
        return(
            <div>
                {images}
                <div className="m-3">&nbsp;</div>
                {images2}
            </div>
        );
    }
}

export default LoopImages;