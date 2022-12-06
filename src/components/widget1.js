import React, { Component } from 'react';



export default class Widget1 extends Component {
    state = {
        post: {}
    };

    //appel de l'API 
    handleChange = event => {
        this.setState({ identifiant: event.target.value });

        fetch(`https://jsonplaceholder.typicode.com/todos/${event.target.value}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {

                this.setState({ post: result })

            })

    };

    //retourne la phrase correspondant à l'id 
    render() {
        const { identifiant } = this.state;
        return (
            <div className="Widget1">
                <h2>Motto of the day</h2>
                <h3>Enter today's date</h3>
                <h4>{(this.state.post.title) ? this.state.post.title : <p>Loading...</p>}</h4>

                <input
                    type="text"
                    name="Id"
                    value={identifiant}
                    onChange={this.handleChange}
                />

            </div>

        );
    }
}