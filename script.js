const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

//take all the small cups and loop through them
// add an event listener to each cup
// when the cup is clicked, then the cup is filled with water
smallCups.forEach((cup, idx) => {
  console.log(idx)
  cup.addEventListener('click', () => highLightCups(idx))
})
// idx is the index of the cup that is clicked
// if the cup is clicked, then the index of the cup is passed to the function highLightCups
function highLightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--
  }
  console.log(idx)
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
}
