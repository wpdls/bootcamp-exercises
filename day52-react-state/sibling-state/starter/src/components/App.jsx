import React, { useState, useEffect } from "react";

import John from './Sib1.jsx'
import Mary from './Sib2.jsx'

const ShoppingCart = () => {
  const [cart, setCart] = useState({})
  const increaseSiblingScore = (siblingNumber) => {
    setCounts(prevCounts => {
      return {
        ...prevCounts,
        [siblingNumber]: prevCounts[siblingNumber] + 1
      }
    })
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <John sibling={'Mary'} addToMarysScore={increaseSiblingScore} score={counts.John}/>
      <Mary sibling={'John'} addToJohnsScore={increaseSiblingScore} score={counts.Mary} />
    </div>
  )
};

export default App;
