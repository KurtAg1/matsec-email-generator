// get name when user enters site
function getName() {
  let txt = "";
  let person = prompt("Please enter your full name:");
  if (person == null || person == "") {
    txt = "[Enter Name]"; // Cancelled Prompt
  } else {
    txt = person;
  }
  return txt;
}

let person = getName();

// To copy text
function copyText(id) {
  /* Get the text field */
  const copyText = document.getElementById(id);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  // Deselect text
  window.getSelection().removeAllRanges();
}

// Generate random num
function generateNum(max) {
  return Math.floor(Math.random() * max);
}

// Create perspective
const view = document.getElementById("selectView");

view.addEventListener("change", newPerspective);

let perspective = "Student";
function newPerspective() {
  perspective = view.value;
  createEmail(perspective);
}
// Listen for view

// LOAD JSON:
let subjects = [];
let greetings = [];
let studentText = [];
let parentText = [];
let otherText = [];
let signOff = [];

async function getJSON() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    subjects = data.subjects;
    greetings = data.greetings;
    studentText = data.studentText;
    parentText = data.parentText;
    otherText = data.otherText;
    signOff = data.signOff;
    createSubject();
    createEmail("Student"); // student perspective by default
  } catch (error) {
    console.log(error);
  }
}

getJSON();

// FOR SUBJECT:

const subjectBox = document.getElementById("subject");

function createSubject() {
  const subjectText = subjects[generateNum(subjects.length)];

  subjectBox.value = subjectText;
}

// FOR EMAIL:

const emailForMatsec = document.getElementById("emailForMatsec");
const time = document.getElementById("time");

function createEmail(personView = view.value) {
  let greetingText = greetings[generateNum(greetings.length)];
  let firstParagraphText;
  let secondParagraphText;
  let thirdParagraphText;
  let fourthParagraphText;
  let signOffText = signOff[generateNum(signOff.length)];

  switch (personView) {
    case "Student":
      firstParagraphText =
        studentText["firstPara"][generateNum(studentText["firstPara"].length)];
      secondParagraphText =
        studentText["secondPara"][
          generateNum(studentText["secondPara"].length)
        ];
      thirdParagraphText =
        studentText["thirdPara"][generateNum(studentText["thirdPara"].length)];
      fourthParagraphText =
        studentText["fourthPara"][
          generateNum(studentText["fourthPara"].length)
        ];
      time.defaultValue = "08:00";
      break;
    case "Parent":
      firstParagraphText =
        parentText["firstPara"][generateNum(parentText["firstPara"].length)];
      secondParagraphText =
        parentText["secondPara"][generateNum(parentText["secondPara"].length)];
      thirdParagraphText =
        parentText["thirdPara"][generateNum(parentText["thirdPara"].length)];
      fourthParagraphText =
        parentText["fourthPara"][generateNum(parentText["fourthPara"].length)];
      time.defaultValue = "09:00";
      break;
    case "Other":
      firstParagraphText =
        otherText["firstPara"][generateNum(otherText["firstPara"].length)];
      secondParagraphText =
        otherText["secondPara"][generateNum(otherText["secondPara"].length)];
      thirdParagraphText =
        otherText["thirdPara"][generateNum(otherText["thirdPara"].length)];
      fourthParagraphText =
        otherText["fourthPara"][generateNum(otherText["fourthPara"].length)];
      time.defaultValue = "10:00";
      break;
  }

  const email = `${greetingText}\n\n${firstParagraphText}\n\n${secondParagraphText}\n\n${thirdParagraphText}\n\n${fourthParagraphText}\n\n${signOffText}\n${person}`;
  emailForMatsec.value = email;
}
