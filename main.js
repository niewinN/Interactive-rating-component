const numbers = document.querySelectorAll(".number")
const submitBtn = document.querySelector('.button')
const mainCard = document.querySelector('.card')
const secondCard = document.querySelector('.second-card')
const rating = document.querySelector('.selected')

const removeBgcColor = () => {
    numbers.forEach(number => {
        number.classList.remove('active')
    })
}

numbers.forEach(number =>  {
    number.addEventListener('click', function() {
    removeBgcColor()
    number.classList.add('active')
    })
})

const switchCard = () => {
    mainCard.classList.add('hidden')
    secondCard.classList.remove('hidden')
    rating.innerHTML = `You selected ${document.querySelector('.active').innerHTML} out of 5`
}

submitBtn.addEventListener('click', switchCard)

    
