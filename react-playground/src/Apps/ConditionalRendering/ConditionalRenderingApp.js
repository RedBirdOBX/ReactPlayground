import React, {useState} from 'react';
import ThatCompnent from './Components/ThatComponent';
import ThisCompnent from './Components/ThisComponent';

const ConditionalRenderingApp = () =>
{
    const [showThis, SetShowThis] = useState(true);
    const [showThat, SetShowThat] = useState(false);

    return (
       <div className="container">
            <h3>Conditional Rendering Demo</h3>
            <p>You can see "this" but you can't see "that".</p>

            { (showThis) ? <ThisCompnent /> : "" }
            { (showThat) ? <ThatCompnent /> : "" }

       </div>
   );
};

export default ConditionalRenderingApp;
