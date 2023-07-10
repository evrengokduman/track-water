const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

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
  updateBigCup()
}
// update the big cup
// the big cup is updated based on the number of small cups that are filled
// the percentage of the big cup is updated based on the number of small cups that are filled
// the remained number of the big cup is updated based on the number of small cups that are filled

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length

  const totalCups = smallCups.length
  console.log(`This is the number of full cups ${totalCups} `)

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100} %`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    const goalInput = document.getElementById('goal')
    goalInput.addEventListener('input', updateBigCup)
    const goalLiters = parseFloat(goalInput.value)
    const remainingLiters = goalLiters - (250 * fullCups) / 1000
    liters.innerText = `${remainingLiters} L `
  }
}
