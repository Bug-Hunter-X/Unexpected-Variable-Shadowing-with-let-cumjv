function myFunc() {
  let outerX = 10;
  if (true) {
    let innerX = 20; 
    console.log(innerX); // Output: 20
  }
  console.log(outerX); // Output: 10
}
