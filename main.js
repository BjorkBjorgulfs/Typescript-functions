'use strict';

// The people array contains objects representing each person's data
const people = [
  {
    name: "Tansy Leed",
    dateOfBirth: "8/30/1972",
    children: 2,
    country: "Philippines",
    knowsHowToProgram: true,
  },
  {
    name: "Sandy McLafferty",
    dateOfBirth: "7/3/1974",
    children: 4,
    country: "Philippines",
    knowsHowToProgram: true,
  },
  {
    name: "Nicky Covert",
    dateOfBirth: "10/31/1978",
    children: 4,
    country: "France",
    knowsHowToProgram: false,
  },
  {
    name: "Kalindi Trundell",
    dateOfBirth: "7/21/2001",
    children: 2,
    country: "Brazil",
    knowsHowToProgram: true,
  },
  {
    name: "Wilmer Hayball",
    dateOfBirth: "4/3/2002",
    children: 5,
    country: "Japan",
    knowsHowToProgram: false,
  },
];

// Function to extract the year from a date string
function getYear(dateOfBirth) {
  return new Date(dateOfBirth).getFullYear();
}

// Function to display the output in the HTML
function displayOutput(text) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = text;
}

// Compare the first and last person's age
function compareAges() {
  const firstPersonAge = getYear(people[0].dateOfBirth);
  const lastPersonAge = getYear(people[people.length - 1].dateOfBirth);
  let result = "";

  if (firstPersonAge < lastPersonAge) {
    result = "The first person is older than the last person.";
    console.log("The first person is older than the last person.");
  } else if (firstPersonAge > lastPersonAge) {
    result = "The last person is older than the first person.";
    console.log("The last person is older than the first person.");
  } else {
    result = "Both people are the same age.";
    console.log("Both people are the same age.");
  }

  displayOutput(result);
}

// Compare the number of children between the 2nd and 3rd person
function compareChildren() {
  const result = (people[1].children === people[2].children) ?
    "The 2nd and 3rd person have the same number of children." :
    "The 2nd and 3rd person have a different number of children.";

  displayOutput(result);
  console.log(result);
}

// Check if both the 1st and 4th person know how to program
function checkProgrammingSkills() {
  const result = (people[0].knowsHowToProgram && people[3].knowsHowToProgram) ?
    "Yay! Both the 1st and 4th person know how to program." :
    "LMGTFY. One or both of them don't know how to program.";

  displayOutput(result);
  console.log(result);
}

// Switch statement for the 2nd person's nationality
function checkNationality() {
  let result = "";
  switch (people[1].country) {
    case "Iceland":
      result = "Hæ";
      console.log("Hæ");
      break;
    case "Spain":
      result = "Hola";
      console.log("Hola");
      break;
    case "Korea":
      result = "여보세요";
      console.log("여보세요");
      break;
    default:
      result = "Hello";
      console.log("Hello");
  }

  displayOutput(result);
}

// Ternary operator to check if the 2nd person's name is longer than 5 characters
function checkNameLength() {
  const result = people[1].name.length > 5 ?
    "Yes, it's long" :
    "No, it's short";

  displayOutput(result);
  console.log(result);
}
