const student = {
    name: "Alice",
    age: 15,
    grade: "10th",
    scores: {
      math: 85,
      science: 75,
      english: 65,
    },
    hasPerfectAttendance: true,
    extraCurricular: {
      participatesInSports: true,
      participatesInDrama: false,
      participatesInMathClub: true,
    },
    behavior: {
      hasDetention: false,
      isRespectful: true,
    },
    guardian: {
      relation: "Father",
      name: "John Doe",
    },
    awards: ["Math Excellence"],
  };
  
  /* 1. Is the student eligible for a Science Award? 
  - Science score is greater than or equal to 80.
  - The student has perfect attendance.
  - The student has no detentions. */

  if(student.scores.science >= 80 && student.hasPerfectAttendance && !student.behavior.hasDetention){
    console.log("eligible for a Science Award")
  }
  else{
    console.log("Not eligible for a Science Award")
  }
  
  
  /* 2. Does the student qualify for the Sports Program? 
  - The student participates in sports OR 
  - The student has perfect attendance AND their math score is equal to 85. */
  
  /* 3. Does the student need extra help in English? 
  - English score is less than 70 AND the student does not participate in Drama Club OR
  - The student's guardian is their father. */
  
  /* 4. Is the student eligible for Math Club Leader? 
  - The student participates in Math Club.
  - Math score is greater than 80.
  - The student's behavior is respectful.
  - The student has at least one award. */
  
  /* 5. Does the student qualify for a Drama Scholarship? 
  - The student participates in Drama Club OR 
  - The student has perfect attendance AND their English score is not equal to 50. */
  
  /* 6. Does the student require additional behavior mentoring? 
  - The student is not respectful OR 
  - The student has been in detention AND does not participate in sports. */
  


  const user = {
    isAdult: true
  }

  //generic way

  if(!isAdult){
    console.log("gets free ride")
  }
  else{
    console.log("does not gets free ride")
  }

  //ternary way
  //condition ? true: false

  !isAdult?  console.log("gets free ride") :  console.log("does not gets free ride")