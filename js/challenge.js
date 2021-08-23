
let i = 0
let plusButton = document.querySelector('#plus')
let minusButton = document.querySelector('#minus')
let likeButton = document.querySelector('#heart')
let pauseButton = document.getElementById('pause');
let submitButton = document.querySelector('#submit')

//Increment the counter one number every second
let counter = document.querySelector('#counter');

function increment() {
counter.innerText = ++i
};

let intervalCounter = setInterval(increment, 1000);


//Manually increment the counter with the + button
plusButton.addEventListener('click', (e => {
    let buttonTarget = e.target
    buttonTarget = counter.innerText = i++
}));


//Manually decrement the counter with the - button
minusButton.addEventListener('click', (e => {
    let buttonTarget = e.target
    buttonTarget = counter.innerText = i--
}));


//As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.
let likeClickQuantity = 0

let likeClickCounter = setInterval(resetLikeClickQuantity, 1000);

likeButton.addEventListener('click', e => {
  commentLikes()
});

function commentLikes() {
  let likeComment = document.querySelector('.likes') //Selected the comments area on the page
  if (document.getElementById(`${i}`)){
     document.getElementById(`${i}`).innerText = (`${i} has been liked ${likeClickIncrementer()} times`);
  } else {
  let likeList = document.createElement('li');    //Create the list element
  likeList.id = i
  let listText = document.createTextNode(`${i} has been liked ${likeClickIncrementer()} times`) //Create the text
  likeList.appendChild(listText);   //Push text into list
  likeComment.appendChild(likeList); //Push list into comments area
}};

function resetLikeClickQuantity() {
  return likeClickQuantity = 0
};

function likeClickIncrementer() {
    likeClickQuantity++
    return likeClickQuantity  
};


// As a user, I can pause the counter, which should:
// disable all buttons except the pause button
pause.addEventListener('click', e => {
  if (pauseButton.innerText === 'pause') {
  clearInterval(intervalCounter)   // pause the counter
  plusButton.disabled = true   // disable all buttons except the pause button
  minusButton.disabled = true
  likeButton.disabled = true
  submitButton.disabled = true
  pauseButton.innerText = 'resume'   // switch the label on the button from "pause" to "resume"
} else {
  intervalCounter = setInterval(increment, 1000);
  plusButton.disabled = false
  minusButton.disabled = false
  likeButton.disabled = false
  submitButton.disabled = false
  pauseButton.innerText = 'pause'
}
});


// As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.

// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
let form = document.querySelector('form')

form.addEventListener('submit', e => {
  e.preventDefault()
  //When submit button is pressed
  let formInput = document.getElementById('comment-input').value
  let commentInput = document.createTextNode(`${formInput}`)   //Actual text entered
  let submittedComment = document.querySelector('.Comments') //*selected - Comments area on the DOM
  let commentParagraph = document.createElement("p")   //Create a new <p>
  let commentText = document.createTextNode(commentInput)   //Put input text into a text node
  commentParagraph.appendChild(commentInput)   //Push commentText into commentParagraph
  submittedComment.appendChild(commentParagraph)
  });


