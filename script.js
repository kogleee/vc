const questions =[
    {
        question: "1) Сумма чисел 5 и 3 равна?",
        answer: [8,9,7],
        otvet: 8
    },
    {   
        img:"<img src='img/Не подтверждено 77031.~' alt=''>",
        question: "2) найдите лишний предмет",
        answer: [1,2,3,4],
        otvet: 4
    },
    {
        question: "3) Составьте предложение из данных слов: с мама собакой гуляет.",
        answer: ["С собакой гуляет мама","Мама гуляет с собакой","С мама гуляет собакой"],
        otvet: "Мама гуляет с собакой"
    },
    {
        question: "4) У васи было 7 конфет, он съел 3 конфеты. Сколько конфет у него осталось?",
        answer: [7,3,4],
        otvet: 4
    },
    {
        question: "5) Продолжите последовательность числес: 2,4,6...",
        answer: ["2,4,6,7", "2,4,6,8", "2,4,6,5"],
        otvet: "2,4,6,8"
    },
    {
        img: '<img src="img/1673477702_gas-kvas-com-p-arbuz-detskii-risunok-2.jpg" alt="">',
        question: "6) Что изображено на картинке?",
        answer: ["Арбуз", "Яблоко", "Ананас"],
        otvet: "Арбуз"
    },
    {
        img: '<img src="img/котик.jpg" alt="">',
        question: "7) Какое животное на картинке?",
        answer: ["Собака", "Кошка", "Попугай"],
        otvet: "Кошка"
    },
    {
        img: '<img src="img/треугольник.jpg" alt="">',
        question: "8) Какая геометрическая фигура на рисунке?",
        answer: ["Квадрат", "Круг", "Треугольник"],
        otvet: "Треугольник"
    }, 
    {
        question: "9) Разность чисел 10 и 6 равна?",
        answer: [2,4,7],
        otvet: 4
    },
    {
        img: '<img src="img/ребус.png" alt="">',
        question: "10) Разгадайте ребус",
        answer: ["А", "А черта нас", "Ананас"],
        otvet: "Ананас"
    }
]
let current = 0
let count = 0
let rightAnsw = 0
let failAnsf = 0


let nextbtn = document.querySelector("#next")
nextbtn.addEventListener("click",next)

function question() {
    document.getElementById("answer").innerHTML = ""
    document.getElementById("img").innerHTML = ""
    count = 0
    if (questions[current].img){
        document.getElementById("img").innerHTML = questions[current].img;
    }
    document.getElementById("question").innerText = questions[current].question;
   
    for (elem of questions[current].answer){
        
        document.getElementById("answer").innerHTML += `<p>${elem}</p>`
    }
    let otvet = document.querySelectorAll("p")
    for (let i of otvet){
        i.addEventListener("click", checkAnswer)
    }
    
}

function checkAnswer(event){
    if (count == 0){
       if (this.textContent == questions[current].otvet){
            this.style.background = "green"
            rightAnsw++
        }
        else{
            this.style.background = "red"
            failAnsf++

    } 
    }
    count++
}


function next(){
    if (current != questions.length - 1){
        current++
        question()
    } else{
        if(rightAnsw > questions.length/2){
             document.querySelector(".card-main").innerHTML = "Успешно"
        }else {
            document.querySelector(".card-main").innerHTML = "Неуспешно"
        }
       
    }
    

}






question()