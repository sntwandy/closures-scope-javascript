const myGlobal = 0

function myFunction() {
  const myNumber = 1
  console.log(myGlobal)

  function parent() { // parent() is a closure
    const inner = 2
    console.log(myNumber, myGlobal)

    function child() { // child() is a closure
      console.log(inner, myNumber, myGlobal)
    }
    return child()
  }
  return parent()
}

myFunction()