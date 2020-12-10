import React from 'react';

class HeaderComponent extends React.Component
{
    render() {
        return (
            <div>
                <h4 className="m-3">{this.props.Title}</h4>
                <p>
                    Add any valid GitHub users to the form. This will create a profile card and add it to the list below.<br />
                    Sample users: <code>redbirdobx</code>,  <code>gatortarheel</code>, and <code>gaearon</code>.
                </p>
            </div>
        );
    }
}

export default HeaderComponent;