const qa = [
    {
        question: "How many team members can I invite?",
        answer: `You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.`,
    },
    {
        question: "What is the maximum file upload size?",
        answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
        question: "How do I reset my password?",
        answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
        question: "Do you provide additional support?",
        answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
];
const faq = document.querySelector(".faq");

for (let i = 0; i < qa.length; i++) {
    const question1 = document.createElement("div");
    const question2 = document.createElement("div");
    const question3 = document.createElement("div");
    const question4 = document.createElement("div");
    const question5 = document.createElement("div");
    question1.classList.add("q-wrapper");
    question2.classList.add("question");
    question3.classList.add("dropdown");
    question4.classList.add("a-wrapper");
    question5.classList.add("questions");
    question2.textContent = qa[i].question;
    question4.textContent = qa[i].answer;
    question1.appendChild(question2);
    question1.appendChild(question3);
    question5.appendChild(question1);
    question5.appendChild(question4);
    faq.appendChild(question5);
}

const quest = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".a-wrapper");
const dropdown = document.querySelectorAll(".dropdown");
const qWrapper = document.querySelectorAll(".q-wrapper");

for (let i = 0; i < qa.length; i++) {
    qWrapper[i].addEventListener("click", function () {
        if (answer[i].classList.contains("display")) {
            answer[i].classList.remove("display");
            dropdown[i].classList.add("dropdown-rotate2");
            dropdown[i].classList.remove("dropdown-rotate1");
            quest[i].classList.remove("font-bold");
        } else {
            answer[i].classList.add("display");
            dropdown[i].classList.add("dropdown-rotate1");
            dropdown[i].classList.remove("dropdown-rotate2");
            quest[i].classList.add("font-bold");
        }
    });
}
