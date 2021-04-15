//Step 1- create variables in Javascript Code
var pos = 0; //this "pos" variable is so that the person taking the quiz knows what question they are on, example question 3 out of 4.
var correct = 0;// this "correct" variable stores how many questions they've gotten right.
var test, test_status, question, choice, choices, chA, chB, chC, chD;
//The test variable contains the ‘test’ div and the test_status variable is used to contain the ‘test_status’ heading which displays the user’s progress in the test.

// attempted timer
var countDownDate = new Date("Apr 15, 2021 12:56:00").getTime();
var myfunc = setInterval(function() {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
      
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "d"
  document.getElementById("hours").innerHTML = hours + "h"
  document.getElementById("min").innerHTML = minutes + "m"
  document.getElementById("secs").innerHTML = seconds + "s"

  if (timeleft < 0) {
     clearInterval(myfunc);
     document.getElementById("days").innerHTML = ""
     document.getElementById("hours").innerHTML = ""
     docmuent.getElementById("mins").innerHTML = ""
     docmuent.getElementById("secs").innerHTML = ""
     docmuent.getElementById("end"),innerHTML = "TIME'S Up!";
  }

},1000);

//Step 2- Add questions, Answer Options and answer key to the quiz 
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
    {
        question: "What is a another way to write a variable?",
        a: "function",
        b: "div",
        c: "const",
        answer:"C"
      },
    {
        question: "What brackets are used for arrays?",
        a: "[]",
        b: "{}",
        c: "()",
        answer:"A"
      },
    {
        question: "Which one of these are used for styling a web page?",
        a: "HTML",
        b: "CSS",
        c: "Javascript",
        answer:"B"
      },
    {
        question: "Which tag is used for navigation in HTML?",
        a: "nav",
        b: "div",
        c: "article",
        answer:"A"
      },
      
      {
          question: "what is a good place to implement the Navigation bar on a website?",
          a: "header",
          b: "main",
          c: "title",
          d: "a or b",
          answer:"A"
      }
    ];

    //Step 3-Create get()function
    function get(x){
        return document.getElementById(x);
      }

    //Step 4-create a function to display the questions 
      // this function renders a question for display on the page
function renderQuestion() {
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
      // resets the variable to allow users to restart the test
      pos = 0;
      correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
    chD = questions[pos].d;
    // display the question
    test.innerHTML = "<h3>"+question+"</h3>";
    // display the answer options
    // the += appends to the data we started on the line above
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    test.innerhtml += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }

 //Step 5-Create a function to check the answers
 function checkAnswer() {
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value; 
      }
    }
    // checks if answer matches the correct choice
    if(choice == questions[pos].answer){
      //each time there is a correct answer this value increases
      correct++;
    }
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
  }

  //Step 6-Get the quiz to load
  // Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);

