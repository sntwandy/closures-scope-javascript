function fruits() {
  if (true) {
    var fruit1 = 'Pineapple' // function scope
    let fruit2 = 'Banana' // block scope
    const fruit3 = 'Kiwi' // block scope

    console.log(fruit2);
		console.log(fruit3);
  }

  console.log(fruit1)
}

fruits()
