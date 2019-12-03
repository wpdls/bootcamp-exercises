import React from 'react';

export default class MovieFavorite extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            favorite: null
        }
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test:8080/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`)
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                data: data
            })
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://www.laravel.test:8080/api/movies/favorite/toggle', {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                "movie_id": this.state.movie_id,
                "user_id": 1
            })
        })
        .then(response => response.json())
        .then(this.setState({
            favorite: !this.state.favorite
        }));

    }

    render() {

        let label = 'Loading...';

        if (this.state.favorite === true) {
            label = 'Unfavorite this movie';
        } else if (this.state.favorite === false) {
            label = 'Favorite this movie';
        }

        return (
        <>
            <button>{label}</button>

            <form action="" onSubmit={this.handleSubmit}>

            <input type="submit" value="Submit"/>

            </form>
        </>
            
        )}
}