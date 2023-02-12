//Catalogue Button start
const toggleBtn = document.querySelector('#toggleBtn');
const changeBtn = document.querySelector('#changeBtn');
const card = document.querySelector('.card');
const icon = document.querySelector('.fa-solid');

const toggle = () => {
    if (icon.attributes[0].value === 'fa-solid fa-x') {
        card.attributes[0].value = 'hide';
        icon.attributes[0].value = 'fa-solid fa-bars'
    }
    else {
        card.attributes[0].value = 'show';
        icon.attributes[0].value = 'fa-solid fa-x'
    }
}
toggleBtn.onclick = toggle;
//Catalogue Button ended

//Countdown Timer start

var countDownDate = new Date("Feb 25, 2023 23:59:59").getTime();

var myfunc = setInterval(function () {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "day  "
    document.getElementById("hours").innerHTML = hours + " :"
    document.getElementById("mins").innerHTML = minutes + " :"
    document.getElementById("secs").innerHTML = seconds + ""

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "0 day 0 : 0 : 0";
    }
}, 1000);

//Countdown Timer ended

//Timer Products start
var words = ['Samsung S23', 'Apple IPHONE 17', 'Huawei' , 'Xiaomi Mi20' , 'Motorola'];
var prices = ['2000 AZN','2300 AZN','1800 AZN','1850 AZN','1000 AZN'];
var subtitle = ['New model S23 120 Megapixel camera','1 TB Memorye','The same Huawei','Chinese copy good again','Old Motorola']
var photos=['<img src="img/sams.jpg" alt="" srcset="">','<img src="img/iphone.jpg" alt="" srcset="">','<img src="img/Huawei.png" alt="" srcset="">','<img src="img/xiaomi.jpg" alt="" srcset="">','<img src="img/xiaomi.jpg" alt="" srcset="">']
var t = setInterval(function () {
    var randomNumber = Math.round(Math.random() * (words.length - 1));
    $('#changing').html(words[randomNumber]);
    $('#changingPrice').html(prices[randomNumber]);
    $('#changingSubtitle').html(subtitle[randomNumber]);
    $('#changingPhoto').html(photos[randomNumber]);

}, 2000);
//Timer Products ended