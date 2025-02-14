const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const form4 = document.getElementById('form4');
const form5 = document.getElementById('form5');
const page6 = document.getElementById('page6');

const accepting = document.getElementById('accepting');
const rejecting = document.querySelector('button#rejecting');

let crush = '';
let friend = '';
let friend_img = '';

/* page one */
// get name from form1, apply to output spots
form1.addEventListener('submit', function(e) {
    e.preventDefault();
    crush = document.getElementById('name').value;
    document.getElementById('crush').innerText = crush;
    document.getElementById('crush2').innerText = crush;
    form1.style.display = 'none';
    form2.style.display = 'block';
});

/* page two - favorite color */
form2.addEventListener('submit', function(e) {
    e.preventDefault();
    form2.style.display = 'none';
    form3.style.display = 'block';
});

//event listeners for changing background color
document.getElementById('berry').addEventListener('click', function() {
    document.body.style.backgroundColor = '#7c2946';
});

document.getElementById('fig').addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(153, 27, 58)';
});

document.getElementById('pink').addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(158, 28, 141)';
});


document.getElementById('brat-green').addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(43, 231, 26)'; // convert to rgb

});

/* page three - favorite animal */
form3.addEventListener('submit', function(e) {
    e.preventDefault();
    // save radio value
    friend = document.querySelector('input[name="friend"]:checked').value;
    // save source of image
    friend_img = document.getElementById(`${friend}-img`).src;
    // display image
    document.getElementById('friend-choice').src = friend_img;
    document.getElementById('friend-output').innerHTML = friend;

    form3.style.display = 'none';
    form4.style.display = 'block';
    document.getElementById('friend-choice').style.display = 'block';
});

form4.addEventListener('submit', function(e) {
    e.preventDefault();
    form4.style.display = 'none';
    form5.style.display = 'block';
}); 

form5.addEventListener('submit', function(e) {
    e.preventDefault();
    form5.style.display = 'none';
    page6.style.display = 'block';
});

accepting.addEventListener('click', function() {
    const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["heart"],
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
      };
      
      confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
      });
      
      confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
      });
      
      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
      });

    document.getElementById('page7').style.display = 'block';
    document.getElementById('page6').style.display = 'none';
});

let rejection_index = 0;
let rejection_array = ['hey you pressed the wrong button haha', 
    'oops did it again!', 'i think you meant the other button', 
    'you are so silly', 'did i say funny also?', 'just press the other button please',
    'clean slate! you got this!', 'just one button away!']

rejecting.addEventListener('click', function() {
    rejection_index = (rejection_index + 1) % rejection_array.length;
    rejecting.innerText = rejection_array[rejection_index];
});
