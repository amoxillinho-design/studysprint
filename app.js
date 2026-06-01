function calculateGrade(){

    const scores = [
        Number(document.getElementById("math").value),
        Number(document.getElementById("english").value),
        Number(document.getElementById("science").value),
        Number(document.getElementById("history").value)
    ];

    const validScores = scores.filter(score => !isNaN(score));

    if(validScores.length === 0){
        document.getElementById("gradeResult").innerHTML =
        "Please enter scores.";
        return;
    }

    const average =
        validScores.reduce((a,b)=>a+b,0) /
        validScores.length;

    let grade;

    if(average >= 90){
        grade = "A";
    }
    else if(average >= 80){
        grade = "B";
    }
    else if(average >= 70){
        grade = "C";
    }
    else if(average >= 60){
        grade = "D";
    }
    else{
        grade = "F";
    }

    document.getElementById("gradeResult").innerHTML =
    `Average: ${average.toFixed(2)}%<br>Letter Grade: ${grade}`;
}

function calculateGPA(){

    const gpas = [
        Number(document.getElementById("course1").value),
        Number(document.getElementById("course2").value),
        Number(document.getElementById("course3").value),
        Number(document.getElementById("course4").value)
    ];

    const validGPAs = gpas.filter(gpa => !isNaN(gpa));

    if(validGPAs.length === 0){
        document.getElementById("gpaResult").innerHTML =
        "Please enter GPA values.";
        return;
    }

    const average =
        validGPAs.reduce((a,b)=>a+b,0) /
        validGPAs.length;

    document.getElementById("gpaResult").innerHTML =
    `Your GPA: ${average.toFixed(2)}`;
}

function calculateFinalExam(){

    const currentGrade =
        Number(document.getElementById("currentGrade").value);

    const targetGrade =
        Number(document.getElementById("targetGrade").value);

    const finalWeight =
        Number(document.getElementById("finalWeight").value);

    if(
        isNaN(currentGrade) ||
        isNaN(targetGrade) ||
        isNaN(finalWeight)
    ){
        document.getElementById("finalExamResult").innerHTML =
        "Please fill all fields.";
        return;
    }

    if(
        currentGrade < 0 || currentGrade > 100 ||
        targetGrade < 0 || targetGrade > 100 ||
        finalWeight <= 0 || finalWeight > 100
    ){
        document.getElementById("finalExamResult").innerHTML =
        "Enter valid percentages.";
        return;
    }

    const weight = finalWeight / 100;

    const requiredScore =
        (targetGrade - (currentGrade * (1 - weight)))
        / weight;

    let message = "";

    if(requiredScore > 100){
        message =
        `You would need ${requiredScore.toFixed(2)}%.
        This is not achievable.`;
    }
    else if(requiredScore <= 0){
        message =
        `You already have enough marks to reach your target.`;
    }
    else{
        message =
        `You need ${requiredScore.toFixed(2)}%
        on the final exam.`;
    }

    document.getElementById("finalExamResult").innerHTML =
    message;
}

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️ Light Mode";
    }
    else{
        themeBtn.textContent = "🌙 Dark Mode";
    }

});