//날짜
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();

var month = new String(date.getMonth() + 1);
month = month >= 10 ? month : '0' + month;     // month 두자리로 저장
var day = new String(date.getDate());
day = day >= 10 ? day : '0' + day;                            //day 두자리로 저장

document.getElementById('a').innerHTML+=year+'년'+month+'월'+day+'일';


// 시간
const clock = document.querySelector("#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}시${min}분${sec}`;
}

getClock();
setInterval(getClock, 1000);

