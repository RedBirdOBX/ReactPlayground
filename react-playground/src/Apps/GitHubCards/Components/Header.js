import React from 'react';

class Header extends React.Component
{
    render() {
        return (
            <div>
                <h3 className="text-center m-5">{this.props.Title}</h3>
                <p>
                    Add any valid GitHub users to the form. This will create a profile card and add it to the list below.<br />
                    Sample users: <code>redbirdobx</code>,  <code>gatortarheel</code>, and <code>gaearon</code>.
                </p>
            </div>
        );
    }
}

export default Header;