import React from 'react'

const Sibling1 = props => {
    const { addToMarysScore, score, sibling } = props
    const onButtonClick = () => {
        addToMarysScore(sibling)
    }
    return (
        <div style={{
            border: '1px solid blue',
            margin: '10px'
        }}>
            I'm John
            Score: {score}
            <button
                onClick={onButtonClick}
            >Add to Sibling Score</button>
        </div>
    )
}

export default Sibling1