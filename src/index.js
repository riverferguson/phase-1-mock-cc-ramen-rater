const ramenImage = document.querySelector('#ramen-menu')
const nameHeader = document.querySelector('.name')
const restaurantName = document.querySelector('.restaurant')
const rating = document.querySelector('#rating-display')
const commentDisplay = document.querySelector('#comment-display')
const detailImage = document.querySelector(".detail-image")
const ramenForm = document.querySelector("#new-ramen")

const displayRamen = (ramenObj) => {
    const img = document.createElement('img')
    img.src = ramenObj.image 
    ramenImage.append(img)
    img.addEventListener('click', (e) => {
        displayInfo(ramenObj)
    })
}

const displayInfo = (ramenObj) => {
    nameHeader.textContent = ramenObj.name 
    restaurantName.textContent = ramenObj.restaurant 
    rating.textContent = ramenObj.rating 
    commentDisplay.textContent = ramenObj.comment
    detailImage.src = ramenObj.image 
}

const addRamen = () => {
    const nameInput = document.querySelector('#new-name').value
    const restaurantInput = document.querySelector('#new-restaurant').value
    const imageInput = document.querySelector('#new-image').value
    const ratingInput = document.querySelector('#new-rating').value
    const commentInput = document.querySelector('#new-comment').value
    const ramenObject = {
        "name": nameInput,
        "restaurant": restaurantInput,
        "image": imageInput,
        "rating": ratingInput,
        "comment": commentInput
    }
    displayRamen(ramenObject)
}



ramenForm.addEventListener("submit", (e) => {
    e.preventDefault()
    addRamen()
    e.target.reset() 
})

const fetchData = () => {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenArray => {
        ramenArray.forEach(ramenObj => displayRamen(ramenObj))
        displayInfo(ramenArray[0])
    })
}
fetchData()