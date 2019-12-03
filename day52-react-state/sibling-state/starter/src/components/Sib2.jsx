import React from 'react'

const Sibling2 = props => {
    const { addToJohnsScore, score, sibling } = props
    const onButtonClick = () => {
        addToJohnsScore(sibling)
    }
    return (
        <div style={{
            border: '1px solid red',
            margin: '10px'
        }}>
            I'm Mary
            Score: {score}
            <button onClick={onButtonClick}>Add to Sibling Score</button>
        </div>
    )
}

export default Sibling2