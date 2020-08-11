import React from 'react';

class Square extends React.Component 
{
    // each square...button...has state.  That's how each button can remember if it's been clicked or not.
    
    constructor(props) 
    {
        super(props);

        this.state = 
        {
            value: null,
        };
    }

    render() 
    {
      return (
        <button 
            className="square" 
            onClick={ () => this.setState( { value: 'X' } )}>
          {this.state.value}
        </button>
      );
    }
}

export default Square;

  