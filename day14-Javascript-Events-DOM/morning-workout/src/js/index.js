const nationalID = prompt ('what is your NID');


const nidIsValid = (nid) => {
    const nationalID = parseInt(nid,10)
    if (Number.isNaN(nationalID)) {
      return false;
    }
   
    if (nationalID % 11 !== 0 ) {
    return false;
    }

    else {
        return true;
    }
  };


  document.write (nidIsValid());