import React from 'react';

import MovieFavorite from './MovieFavorite.jsx';

export default class MovieReview extends React.Component {
    constructor(props) {
        super(props)

        this.movie_id = 333;

        this.state = {
            movie_data: null,
            text: '',
            rating: '',
        }
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test:8080/api/movie?id=${this.movie_id}`)
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                movie_data: json_data
            })
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://www.laravel.test:8080/api/review', {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                "movie_id": 946,
                "user_id": 1,
                "text": this.state.text,
                "rating": 6
            })
        })

    }

    handleTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleRatingChange = (event) => {
        this.setState({
            rating: event.target.value
        })
    }
    
    render(){   

        let movie = 'Loading...';

        if (this.state.movie_data !== null) {
                movie = (
                    <div className="movie">
                        <h2>{this.state.movie_data.name}</h2>
                        <img src={this.state.movie_data.poster_url} alt=""/>
                    </div>
                )
        }


        return (
        <>
            {movie}
            <form action="" method="post" onSubmit={this.handleSubmit}>

                <textarea name="text" cols="30" rows="10" value={this.state.text} onChange={this.handleTextChange}></textarea>

                <input type="number" name="rating" value={this.state.rating} onChange={this.handleRatingChange}/>

                <input type="submit" value="Submit"/>
            </form>
            
            <MovieFavorite movie_id={this.movie_id}/>
        </>
        )
    } 
}