// random mewsic genorator (very cool)
console.log("script running")

let pictures = document.querySelectorAll(".card-image");

let quiz = {
  color: ["logical", "creative", "logical", "creative"],
  organize: ["extrovert", "introvert", "extrovert", "introvert"],
  introvert: ["creative", "logical", "creative", "logical"],
  music: ["introvert", "extrovert", "introvert", "extrovert"],
  volume: ["logical", "creative", "logical", "creative"],
  food: ["extrovert", "introvert", "extrovert", "introvert"],
  flaw: ["extrovert", "introvert", "extrovert", "introvert"],
  instrument: ["extrovert", "introvert", "extrovert", "introvert"],
};

let quizTaker = {
  logical: 0,
  creative: 0,
  extrovert: 0,
  introvert: 0,
};

let numQuestions = 0; 

//make question limit reach 8, so that the results dont get messed up and show, results should show in the results html page
pictures.forEach((picture) => {
// while (numQuestions < 8, i++){
  // if (numQuestions === 8) {
  //   console.log(numQuestions)
  //   return};
  picture.addEventListener("click", (e) => {
    let choice = picture.id.split("-");
    console.log("choice",choice);

    picture.classList.toggle("has-background-light");
    picture.classList.toggle("has-background-warning");

    let answer = quiz[choice[0]][choice[1]];
    console.log(choice)
    console.log(quiz, quiz)
    document.querySelector()
    quizTaker[answer]++;
    console.log(quizTaker)
    numQuestions++; 
    console.log(numQuestions)
  });
});

let personalityType; 
let thinkerType; 

if (quizTaker.extrovert > quizTaker.introvert){
  personalityType = "Extrovert";
} else{
  personalityType = "Introvert";
}

if (quizTaker.logical > quizTaker.creative){
  thinkerType = "Logical";
} else{
  thinkerType = "Creative";
}
console.log(quizTaker);
console.log(personalityType, thinkerType); 
// document.getElementById()
//       console.log("here1")
//       let resultID;
//       console.log("here2")

//       console.log(resultID)
//       let result = document.querySelector(resultID);
//       console.log("result",result);
//       result.classList.remove("hidden");
  //   });
  // });

