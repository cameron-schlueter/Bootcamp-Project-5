const saveBtn9am = document.getElementsByClassName('row time-block past');
const input9am = document.getElementById('hour-9');

const saveBtn10am = document.getElementsByClassName('row time-block present');
const input10am = document.getElementById('hour-10');

const saveBtn11am = document.getElementsByClassName('row time-block future');
const input11am = document.getElementById('hour-11');

// This fits in here somewhere but I don't know how and don't really know what it does, but I remember prof saying we have to append.
//var 9am = document.getElementById("hour-9");
 // document.body.appendChild(9am);
 // var data = 9am.getElementById("hour-9");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// looking to save the input data in DOM. definitely need to appendChild, but where to after that?

//this is the start of wrapping the code in a call to jQuery
$(document).ready(function() {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 

  //event listener for the save button and local storage
$saveBtn9am.addEventListener('click',function() {
    const input9am = inputField.value;
    localStorage.setItem('fas fa-save', input9am);
  });

$saveBtn10am.addEventListener('click',function() {
    const input10am = inputField.value;
    localStorage.setItem('fas fa-save', input10am);
  });

$saveBtn11am.addEventListener('click',function() {
    const input11am = inputField.value;
    localStorage.setItem('fas fa-save', input11am);
  });
});



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // past DOM inputs
  $(document).ready(function() {
    // Save user input to local storage
    $('#row time-block past').on('input', function() {
      var input = $(this).val();
      localStorage.setItem('col-8 col-md-10 description', input);
    });
  
    // Set the value of the textarea element from local storage
    var savedInput = localStorage.getItem('col-8 col-md-10 description');
    if (savedInput) {
      $('#row time-block past').val(savedInput);
    }
  });
  
  // present DOM inputs
  $(document).ready(function() {
    // Save user input to local storage
    $('#row time-block present').on('input', function() {
      var input = $(this).val();
      localStorage.setItem('col-8 col-md-10 description', input);
    });
  
    // Set the value of the textarea element from local storage
    var savedInput = localStorage.getItem('col-8 col-md-10 description');
    if (savedInput) {
      $('#row time-block present').val(savedInput);
    }
  });
  
  // future DOM inputs
  $(document).ready(function() {
    // Save user input to local storage
    $('#row time-block future').on('input', function() {
      var input = $(this).val();
      localStorage.setItem('col-8 col-md-10 description', input);
    });
  
    // Set the value of the textarea element from local storage
    var savedInput = localStorage.getItem('col-8 col-md-10 description');
    if (savedInput) {
      $('#row time-block future').val(savedInput);
    }
  });
  
  // TODO: Add code to display the current date in the header of the page.

  //why is this not working now?
function updateClock() {
    const now = dayjs();
    const time = now.format('dddd, MMMM D, YYYY, hh:mm:ss');
    document.getElementById('currentDay').innerHTML = time;
  }
  
  setInterval(updateClock, 1000);
  
  console.log();


//var 9am = document.getElementById("hour-9");
  //document.body.appendChild(9am);
  //var data = 9am.getElementById("hour-9");
