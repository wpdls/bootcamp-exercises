import React from 'react';


export default class Game extends React.Component {
    constructor(props) {
        super(props);
        

        const grid = [
            [ 'A',  'B', 'C', 'D', 'E', 'F' ],
            [ 'I',  'J', 'K', 'L', 'M', 'N' ],
            [ 'A',  'B', 'C', 'D', 'E', 'F' ],
            [ 'I',  'J', 'K', 'L', 'M', 'N' ]
        ];

        this.state = {
            grid: grid
        }
    }

    render() {
        return (
            <div style={{width: '100vw', height: '100vh', display: 'flex', background: '#aaa'}}>
                <div style={{width: '60vw', height: '40vw', margin: 'auto'}}>
                    {
                        this.state.grid.map( ( row ) => (
                            <div style={{ display: 'flex', flexDirection: 'row'} } >
                                {
                                    row.map ((card) => (
                                        <div style={{
                                            width: '10vw',
                                            height: '10vh',
                                            fontSize: '3rem',
                                            margin: '3px',
                                            background: '#fff'
                                        }}> {card} </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            
        );
    }
}
