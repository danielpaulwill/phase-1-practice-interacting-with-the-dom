
let i = 0


//Increment the counter one number every second
let counter = document.querySelector('#counter');

function increment() {
counter.innerText = ++i
};

let intervalCounter = setInterval(increment, 1000);


//Manually increment the counter with the + button
let plusButton = document.querySelector('#plus').addEventListener('click', (e => {
    let buttonTarget = e.target
    buttonTarget = counter.innerText = i++
}));


//Manually decrement the counter with the - button
let minusButton = document.querySelector('#minus').addEventListener('click', (e => {
    let buttonTarget = e.target
    buttonTarget = counter.innerText = i--
}));


//Like a number on the counter
let likeClick = document.querySelector('#heart').addEventListener('click', e => {
  likeClickIncrementer()
  commentLikes()
});

let likeClickQuantity = 1

function commentLikes() {
  let likeComment = document.querySelector('.Comments') //Selected the comments area on the page
  let likeList = document.createElement('li');    //Create the list element
  let listText = document.createTextNode(`${i} has been liked ${likeClickQuantity} times`) //Create the text
  likeList.appendChild(listText);   //Push text into list
  likeComment.appendChild(likeList); //Push list into comments area
};




function likeClickIncrementer() {
  document.querySelector('#heart').addEventListener('click', e => {
    likeClickQuantity = ++likeClickQuantity
//    console.log(likeClickQuantity)
  })
};

//I should see the count of the number of 'likes' associated with that number displayed.
//
//Click the like button, only append one comment string per second, increment the like count per click




// As a user, I can pause the counter, which should:

// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.

// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."


