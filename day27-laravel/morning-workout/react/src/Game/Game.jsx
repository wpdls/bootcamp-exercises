import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game">
            <img src={this.props.image_url} alt={this.props.name}/>
                <div>
                    <h2>{this.props.name}</h2>
                <div>
                    <h3>Rating:</h3>{this.props.rating}
                </div>
                <div>
                    <h3>Released at:</h3> {this.props.released_at}
                </div>
                <div>
                <h3>Description</h3>{this.props.description}
                </div>
            </div>
            </div>
        );
    }
}