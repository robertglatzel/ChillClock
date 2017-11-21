
var clockInput = document.getElementById("clockInput")

function currentTime() {
	var today = new Date()

	var hour = today.getHours()
	var minute = today.getMinutes()
	var second = today.getSeconds()

	//The hours have to stay within the 1-12 range, not military time. So I'll create a little check to reduce anything over 12.

	if (hour > 12){
		hour = hour -12
	}

	function fixTime(i){
		if(i < 10){
			i = "0" + i
		}
		return i
	}

	minute = fixTime(minute)
	second = fixTime(second)

	var theTime = hour + ":" + minute + ":" + second
	//adding the concat variable theTime to clockInput, which is the var for the element in my html body.
	clockInput.textContent = theTime

	//every second, the current time function runs.
	setTimeout(currentTime, 1000)
}

document.getElementById("clockInput").addEventListener("onload", currentTime())


//Changes the text shadow color every half second.
function toggle_color(color1, color2, cycle_time, wait_time) {

    setInterval(function first_color() {
        clockInput.style.textShadow = color1;
        setTimeout(change_color, wait_time);
    }, cycle_time);

    function change_color() {
        clockInput.style.textShadow = color2;
    }
}

toggle_color(" 0 0 23px #dba9ce", "0 0 15px #47d1d5", 2000, 1000);


///////////Background randomizer//////////////

function changeBackground() {
    var backgroundArray = ["img/3.gif","img/4.gif","img/5.gif","img/7.gif","img/8.gif","img/9.gif","img/11.gif","img/13.gif","img/15.gif","img/16.gif","img/18.gif","img/19.gif","img/20.gif","img/21.gif","img/22.gif","img/23.gif","img/24.gif","img/25.gif","img/26.gif","img/28.gif","img/29.gif", "img/rainycity.gif", "img/2814.gif",
		"img/34.gif","img/35.gif","img/36.gif","img/38.gif","img/39.gif","img/42.gif","img/44.gif","img/45.gif","img/47.gif","img/48.gif","img/49.gif","img/50.gif","img/51.gif","img/53.gif","img/54.gif","img/56.gif","img/58.gif","img/59.gif","img/60.gif","img/62.gif","img/63.gif","img/64.gif","img/65.gif","img/66.gif","img/67.gif",
		"img/68.gif","img/69.gif","img/71.gif","img/72.gif","img/73.gif","img/76.gif","img/77.gif","img/78.gif","img/79.gif","img/80.gif","img/81.gif","img/82.gif","img/83.gif","img/85.gif","img/87.gif","img/88.gif","img/89.gif","img/90.gif","img/91.gif","img/92.gif","img/93.gif","img/99.gif","img/100.gif","img/101.gif","img/102.gif",
		"img/103.gif","img/104.gif","img/105.gif","img/106.gif","img/107.gif","img/108.gif","img/111.gif","img/113.gif","img/114.gif","img/115.gif","img/116.gif","img/117.gif","img/118.gif","img/120.gif","img/122.gif","img/123.gif","img/125.gif","img/126.gif","img/127.gif","img/129.gif"]

    $('body').css({
        'background' : 'url('+ backgroundArray[Math.floor(Math.random() * backgroundArray.length)] + ') no-repeat center center fixed',
        "background-size" : "cover"
    });
}

// Show Random Image on Page Load
changeBackground();
