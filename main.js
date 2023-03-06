const numberList = document.querySelectorAll(".number")
const items = document.querySelectorAll(".item")

const removeBgc = () => {
    numberList.forEach(number => {
        number.classList.remove('active')
    })
}

numberList.forEach(number =>  {
    number.addEventListener('click', function() {
    removeBgc()
    number.classList.add('active')
    })
})
    
