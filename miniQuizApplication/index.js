import userInput, { question } from "readline-sync";
import kuler from "kuler"

// Quiz Questions
// General Knowledge
let quizQuestionsSetOne = {
    data: [
        {
            question: "What is the largest planet in our solar system?",
            options: {
                a: "Saturn",
                b: "Jupiter",
                c: "Earth",
                d: "Mars"
            },
            correctAnswer: "b"
        },
        {
            question: "what is the highest mountain In the World",
            options: {
                a: "mount fuji",
                b: "mount Everest",
                c: "K2",
                d: "MOunt kilimanjaro"
            },
            correctAnswer: "b"
        },
        {
            question: "which ocean is the largest on earth",
            options: {
                a: "Pacific Ocean",
                b: "Atlantic Ocean",
                c: "Arctic ocean",
                d: "Indian Ocean"
            },
            correctAnswer: "a"
        },
        {
            question: "Which animal is known as the 'king of the jungle'?",
            options: {
                a: "Lion",
                b: "Giraffe",
                c: "Cheetah",
                d: "Gazelle"
            },
            correctAnswer: "a"
        },
        {
            question: "What is often called the 'universal solvent'?",
            options: {
                a: "Alcohol",
                b: "Acetone",
                c: "Water",
                d: "Acid"
            },
            correctAnswer: "c"
        },
    ],

}
let quizQuestionsSetTwo = {
    data: [
        {
            question: "What does the `var` keyword do in JavaScript?",
            options: {
                a: "Declares a Loop",
                b: "Declares a constant.",
                c: "Declares a function.",
                d: "Declares a variable."
            },
            correctAnswer: "d"
        },
        {
            question: "Which method is used to add an element to the end of an array in JavaScript?",
            options: {
                a: "Reverses the order of elements in an array.",
                b: "Reverses the last of elements in an array.",
                c: "Adds a new element to an array.",
                d: "Sorts an array alphabetically."
            },
            correctAnswer: "c"
        },
        {
            question: "Which language is primarily used for adding interactivity to web pages?",
            options: {
                a: "HTML",
                b: "PYTHON",
                c: "JAVASCRIPT",
                d: "CSS"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the purpose of the `<script>` tag in HTML?",
            options: {
                a: "To create a new HTML element.",
                b: "To define a block of CSS styles.",
                c: "To display images on a webpage.",
                d: "To link external JavaScript files or embed JavaScript code."
            },
            correctAnswer: "d"
        },
        {
            question: "Which of the following is true about the `let` keyword in JavaScript?",
            options: {
                a: "It can be redeclared in the same scope.",
                b: "It has block scope.",
                c: "It defines a constant variable.",
                d: "It has global scope."
            },
            correctAnswer: "b"
        },
    ]
}

//Quiz Participanta

let quizParticipants = {
    data: []
}
function conductQuiz(quizArray) {
    let participateMems = userInput.questionInt(kuler("How many members are participating in the quiz: ", "#696969"));
    for (let i = 0; i < participateMems; i++) {
        console.log(kuler(`                  Participate ${i + 1}`, "#5F9EA0"));

        let UserName = userInput.question(kuler("Enter Your Name before starting the quiz: ", "#DAA520"))
        if (UserName !== isNaN) {
            let Score = 0;
            for (let i = 0; i < quizArray.data.length; i++) {
                console.log(kuler("       " + "Questionn " + (i + 1) + " of " + quizArray.data.length, "#DC143C"))
                let printQuestion = ((i + 1) + "." + quizArray.data[i].question + " ?")
                console.log(printQuestion);
                for (let item in quizArray.data[i].options) {
                    let printOption = kuler(`${item}.${quizArray.data[i].options[item]}`, "#696969")
                    console.log(printOption);

                }
                console.log();
                let quizAns = userInput.question("Enter (a/b/c/d): ").toLowerCase();
                if (quizAns != "a" && quizAns != "b" && quizAns != "c" && quizAns != "d") {
                    console.log("Not Valid")
                    break
                }
                if (quizArray.data[i].correctAnswer === quizAns) {
                    console.log(kuler("Correct Answer Entered", "#7FFF00"));

                    Score = Score + 2;
                    console.log("Your Score: " + Score)
                } else {
                    console.log(kuler("Wrong Answer Entered", "#DC143C"))
                }
                console.log();

            }

            quizParticipants.data.push({ name: UserName, score: Score })
        } else {
            console.log("Enter a Valid Name");

        }


    }

}
function leaderBoad(inputObj) {
    let leaders = inputObj.data.sort((a, b) => b.score - a.score);
    for (let leader of leaders) {
        console.log(`${leader.name} - Score ${leader.score}`);

    }
    // return leaders
}
let talentrix = kuler("TALENTRIX", "#FFFFFF")
let space = "                                                                    ";
console.log(kuler(`${space}Hello User! Welcome to ${talentrix}`, "#5F9EA0"));
conductQuiz(quizQuestionsSetOne)
console.log(leaderBoad(quizParticipants));


// console.log(quizParticipants.data)

