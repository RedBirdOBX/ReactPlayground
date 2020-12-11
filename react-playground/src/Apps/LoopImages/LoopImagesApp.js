// challenge:  lopp thru a predefined number of interations and render img controls.

import React from 'react';
import ImageComponent from './ImageComponent';

const loops = 3;
let images = [];


// 1) use a for loop for one version - done
for (let index = 1; index <= loops; index++)
{
    images.push(<ImageComponent key={index} />)
}


// 2) use a .map() function for the second
let images2 = images.map((img) => { return img; });


class LoopImagesApp extends React.Component
{
    render()
    {
        return(
            <div  className="mt-3">
                <h4 className="m-3">Loop Images concept</h4>
                {images}
                <div className="m-3">
                    <hr />
                </div>
                {images2}
            </div>
        );
    }
}

export default LoopImagesApp;