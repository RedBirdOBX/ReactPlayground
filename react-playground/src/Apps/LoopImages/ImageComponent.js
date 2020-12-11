import React from 'react';
import EarthImg from './earth.jpg';

class ImageComponent extends React.Component
{
    render()
    {
        return(<div><img className="p-2" src={EarthImg} /></div>);
    };

}

export default ImageComponent;