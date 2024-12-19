// localStorage.setItem("subject1", "80");
// localStorage.setItem("subject2", "90");

// const value = localStorage.getItem("subject1");
// console.log(value)

// // localStorage.removeItem("subject1");

// localStorage.clear();

let totalMarks;
let percentage;
let grade;

let generateButton = document.getElementById("GenerateButton");

generateButton.addEventListener("click", (e) => {
  e.preventDefault();

  let subject1 = parseInt(document.getElementById("subject1Marks").value);
  let subject2 = parseInt(document.getElementById("subject2Marks").value);
  let subject3 = parseInt(document.getElementById("subject3Marks").value);

  totalMarks = subject1 + subject2 + subject3;
  percentage = (totalMarks / 300) * 100;

  
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage < 90 && percentage >= 80) {
    grade = "B";
  } else if (percentage < 80 && percentage >= 70) {
    grade = "C";
  } else if (percentage < 70 && percentage >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  const resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = `
  <p>Total Marks: ${totalMarks}/300</p>
  <p>Percentage: ${percentage}%</p>
  <p>Grade: ${grade}</p>
  `;
});


let saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", ()=>{
  localStorage.setItem("totalMarks", totalMarks);
  localStorage.setItem("percentage", percentage);
  localStorage.setItem("grade", grade);
})


let loadBtn = document.getElementById("loadBtn");

loadBtn.addEventListener("click", ()=>{
  let marks = localStorage.getItem("totalMarks");
  let percent = localStorage.getItem("percentage");
  let grd= localStorage.getItem("grade");

  const resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = `
  <p>Previous Saved MarkSheet</p>
  <p>Total Marks: ${marks}/300</p>
  <p>Percentage: ${percent}%</p>
  <p>Grade: ${grd}</p>
  `;

})


