// get name when user enters site
function getName() {
  let txt = "";
  let person = prompt("Please enter your name:");
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
}

// Generate random num
function generateNum(max) {
  return Math.floor(Math.random() * max);
}

// FOR SUBJECT:

const subjectBox = document.getElementById("subject");

const subjects = [
  "Exams and Covid",
  "Current circumstances and exams",
  "What will happen to exams?",
  "Students left in the dark",
];
function createSubject() {
  const subjectText = subjects[generateNum(4)];

  subjectBox.value = subjectText;
}

// FOR EMAIL:

// Text to generate from
const greeting = ["Dear Sir/Madam,", "To whom it may concern,", "Dear Matsec,"];
const firstPara = [
  "I hope this email finds you well. I am writing this as a student, planning to sit for several exams in the upcoming session, that has become increasingly worried with the current happenings. As you most probably know, in light of the recent surge in local Covid-19 cases, we are looking at an earlier-than-expected second wave, especially when considering the Government's action, or lack thereof, in limiting the spread of this virus.",
  "I am a student that is going to sit for several exams in the upcoming September session. However, due to the current circumstances, I am very worried about the current situation, especially since the recent spike in local Covid-19 cases. Considering that the government is lacking in implementing precautions to reduce the spread of the virus, it is very worrying thinking about how exams are still allowed to go on.",
];
const secondPara = [
  "As a student, I cannot help but think of the possible implications of such a surge in cases, especially if this were to proceed during the exam period itself. This worries me as it puts the month-long efforts of myself, and surely of thousands of other students, in jeopardy, due to the possible postponement or cancellation of exams. Despite this, I firmly believe that the health and wellbeing of students, exam moderators and other staff alike, should be held above anything else, especially when considering that I myself have close family members with immunodeficiency diseases that increase their vulnerability to this virus while other students with such diseases will be at risk as well. I am aware that there was an update recently on the September 2020 Special Session but I found this worrying for several reasons including the amount of heat present in the examination rooms, while wearing masks, the uncertainty of how many students will be present in a room, the fact that we do not know where the exams will be held yet and the fact that our temperature will be taken prior to the exam while we would have been waiting in the heat for a while, having automatically raised our temperature, (or in another situation, the temperature could be normal for asymptomatic students/invigilators, while they are carriers of the virus).",
  "Recent events show why it is a terrible idea for exams to still take place. Considering the fact that currently there is up to a week of waiting to get tested for COVID-19, many people simply don't go to get tested as they do not want to spend a week in quarantine until they get tested. This means that in the examination hall, there may be students who may be symptomatic and refuse to test as they would not be able to sit for the exams they have been eagerly waiting to finish. What will happen if someone shows symptoms? Will you place the entire classroom under quarantine, thus not allowing those students to sit for their other exams? What would happen if there cases spike up when exams are taking place? These are questions that should have been answered in the statement published last week by matsec.",
];
const thirdPara = [
  "I understand your stress with handling such an uncomfortable situation, but together with many students, the anxiety and loss of focus to study due to the uncertainty of a system that puts us at risk, is neither reassuring nor healthy. I am sure that the MATSEC board has thought of such a turn of events happening, and possibly formulated another grading system in lieu of the current exam sessions. I only ask that us students are not kept in the dark, and are informed of this system or anything else that could be done, especially when considering that exams are meant to commence in less than a month.",
  "I know these situations may be difficult to work around, but surely there is a better option rather than going head first into another spike in cases. I am certain there are other possibilities, but even if matsec has not prepared accordingly, the student should not suffer from their lack of understanding of the situation.",
];

const fourthPara = [
  "Thank you for taking the time to read all this, I truly would appreciate a clarification for us students.",
  "Thank you for reading this email. I am sure that I am not the only one with a strong opinion regarding the current situation. Hopefully this email clarifies what many students are thinking about the entire situation.",
];

const signOff = ["Regards,", "Sincerely,", "Sincere regards,"];

const emailForMatsec = document.getElementById("emailForMatsec");

function createEmail() {
  const greetingText = greeting[generateNum(3)];
  const firstParagraphText = firstPara[generateNum(2)];
  const secondParagraphText = secondPara[generateNum(2)];
  const thirdParagraphText = thirdPara[generateNum(2)];
  const fourthParagraphText = fourthPara[generateNum(2)];
  const signOffText = signOff[generateNum(3)];

  const email = `${greetingText}\n\n${firstParagraphText}\n\n${secondParagraphText}\n\n${thirdParagraphText}\n\n${fourthParagraphText}\n\n${signOffText}\n${person}`;
  emailForMatsec.value = email;
}

createSubject();
createEmail();
