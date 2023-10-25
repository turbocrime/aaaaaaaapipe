window.onload = function () {

	const hourHand = document.querySelector('.hourHand');
	const minuteHand = document.querySelector('.minuteHand');
	const secondHand = document.querySelector('.secondHand');
	const time = document.querySelector('.time');
	const clock = document.querySelector('.clock');
	const audio = document.querySelector('.audio');


	window.fakeSeconds = 0;

	function setDate() {

		//const second = today.getSeconds();
		const second = window.fakeSeconds;
		const secondDeg = ((second / 60) * 360) + 360;
		secondHand.style.transform = `rotate(${secondDeg}deg)`;


		//const minute = today.getMinutes();
		const minute = second / 60;
		const minuteDeg = ((minute / 60) * 360);
		minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

		const hour = (minute / 60);
		const hourDeg = ((hour / 12) * 360);
		hourHand.style.transform = `rotate(${hourDeg}deg)`;

		time.innerHTML = '<span>' + '<strong>' + Math.floor(hour) + '</strong>' + ' : ' + Math.floor(minute) % 60 + ' : ' + '<small>' + Math.floor(second) % 60 + '</small>' + '</span>';

	}

	setInterval(setDate, 10);
}
