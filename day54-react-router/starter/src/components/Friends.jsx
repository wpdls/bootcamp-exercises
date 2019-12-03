import React from 'react'

const Friends = props => {
    console.log('props', props.match.params.friends)

    return (
        <>
    <h1>I have many friends</h1>
    <h3>hello {props.match.params.friends}</h3>
    </>
    )




}
export default Friends;