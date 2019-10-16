import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game">
                <div>
                <h2>{this.props.name}</h2>
                </div>
                <img src={this.props.image_url} alt={this.props.name}/>
                <div>
                    <h3>Rating: {this.props.rating}</h3>
                    
                </div>
                <div>
                    {this.props.description}
                </div>
                <div>
                   {this.props.released_at}
                </div>
                
            </div>
        );
    }
}