// so let start by writing the function for our countdown clock

function countDown(){

var now= new Date();

var eventDate=new Date(2022,3,15);

// get the current time in milliseconds

var currenTime=now.getTime();
// get the remaining time by subtracting crrentTime from eventDate
var remTime=eventDate-currenTime;

// now let us convert our time from milliseconds to  sconds

var s=Math.floor(remTime/1000);

var m=Math.floor(s/60);
var h=Math.floor(m/60);
var d=Math.floor(h/24);

// next thing now is to remainder time(seconds, minutes, hours, days)

h%=24;
m%=60;
s%=60;
// s=s%60(remainder when seconds is divided by 60)

// ask questions now

h=(h<10) ? "0"+h:h;
m=(m<10) ? "0" + m:m;
s=(s<10) ? "0" + s :s;

// now let us connect to our html using Dom;

var days=document.querySelector(".day");

var hours=document.querySelector(".hour");

var minutes=document.querySelector(".minutes");

var seconds=document.querySelector(".seconds");

days.innerHTML=`<center>${d}</center>` + " <h1 class='main'>Days</h1>";;
days.innerHTML=`<center>${d}</center>` + " <h1 class='main'>Days left</h1>";;
hours.innerHTML=`<center>${h}</center>` + " <h1 class='main'>Hours Left</h1>";
minutes.innerHTML=`<center>${m}</center>` + " <h1 class='main'>Minutes</h1>";;
seconds.innerHTML=`<center>${s}</center>` + " <h1 class='main'>Seconds</h1>";;

setTimeout(countDown,1000);

}

countDown()

// our slideshow

var myImage=document.querySelector(".img-changer");
var ImageArr=['p1.jpg','laptop.png','p3.jpg','p3.jpg','1.jpg',"6.png"];

var imageIndex=1;
function changeImage(){

   myImage.setAttribute("src", 'img/'+ ImageArr[imageIndex]);

    imageIndex++;

    if(imageIndex>6){
        imageIndex=0;

    }
    setTimeout(changeImage, 6000);  
}
changeImage()


