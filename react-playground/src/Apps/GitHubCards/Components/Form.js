import React from 'react';

class Form extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            UserName: ""
        };
    }

    HandleSubmit = async (event) =>
    {
        console.log("**Form Submitted**");

        event.preventDefault();

        let apiUrl = `https://api.github.com/users/${this.state.UserName}`;
        let githubResponse = await fetch(apiUrl);
        let jsonResponse = await githubResponse.json();

        // handle possible errors
        // '.message' will only be present if user is not found
        if (jsonResponse.message !== undefined)
        {
            if (jsonResponse.message.toLowerCase() === "not found")
            {
                console.error(`User not found at ${apiUrl}`);
            }
            else
            {
                console.error(jsonResponse.message);
                alert(jsonResponse.message);
            }
        }

        // if username is found
        if (jsonResponse.name !== undefined)
        {
            this.props.OnSubmitRef(jsonResponse);

            // reset input after successfull add
            this.setState({ UserName: "" });
        }
    };

    render()
    {
        return (
            <form action="" onSubmit={this.HandleSubmit}>
                <input
                    placeholder="GitHub UserName"
                    value={this.state.UserName}
                    onChange={event => {
                        this.setState({ UserName: event.target.value });
                        console.log(event.target.value);
                    }
                    }
                    required></input>
                <button>Add Card</button>
            </form>
        );
    }
}

export default Form;