import React from 'react';

class DisplayComponent extends React.Component {
    render()
    {
        return (<h4 className="mt-5">Results: {this.props.CounterVal}</h4> );
    }
}

export default DisplayComponent;