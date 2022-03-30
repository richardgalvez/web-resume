// Allow picture to change when clicked
let myImage = document.querySelector('img');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute ('src');
    if(mySrc === 'images/panda1.jpeg') {
        myImage.setAttribute('src', 'images/panda2.jpeg');
    }   else{
        myImage.setAttribute('src', 'images/panda1.jpeg');
    }
}

// Ask for name to change welcome message, loop until name is entered
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName() ;
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'We love pandas, ' + myName;
    }
}

// Re-use name that is saved or set username
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'We love pandas, ' + storedName;
}

myButton.onclick = () => {
    setUserName();
}