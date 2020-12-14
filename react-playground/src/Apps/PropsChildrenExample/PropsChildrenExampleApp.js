import React from 'react';

const PropsChildrenExampleApp = (props) =>
{

    return (
        <div className="mt-3">
            <h4>Props Children Demo</h4>
            <div className="row my-5">
                <div className="col-12 text-center">
                    <h2>Demo</h2>
                    <Display ShowChildren={true}>
                        <div>child node</div>
                        <div>child node</div>
                    </Display>
                </div>
            </div>
        </div>
    );
};


const Display = (props) =>
{
   return (
       <div>
           {props.ShowChildren ? props.children : null}
       </div>
   );
};

export default PropsChildrenExampleApp;