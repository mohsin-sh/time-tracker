 daily = document.getElementById('Daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');


const workHours = document.getElementById('work-hours');
const workPrevious = document.getElementById('work-previous');
const playHours = document.getElementById('play-hours')
const playPrevious = document.getElementById('play-previous')
const studyHours = document.getElementById('study-hours')
const studyprevious = document.getElementById('study-previous')
const exHours = document.getElementById('ex-hours')
const exprevious = document.getElementById('ex-previous')
const socialhours = document.getElementById('social-hours')
const socialPrevious = document.getElementById('social-previous')
const schours = document.getElementById('sc-hours')
const scPrevious = document.getElementById('sc-previous')



function clickDaily(){
	workHours.innerHTML = '5hrs';
	workPrevious.innerHTML = 'Yesterday - 7hrs'
	playHours.innerHTML = '1hrs';
	playPrevious.innerHTML = 'Yesterday - 2hrs'
	studyHours.innerHTML = '0hrs';
	studyprevious.innerHTML = 'Yesterday - 1hrs'
	exHours.innerHTML = '1hrs';
	exprevious.innerHTML = 'Yesterday - 1hrs'
	socialhours.innerHTML = '1hrs';
	socialPrevious.innerHTML = 'Yesterday - 3hrs';
	schours.innerHTML = '0hrs';
	scPrevious.innerHTML = 'Yesterday - 1hrs'
	
}
function clickWeekly(){
	workHours.innerHTML = '32hrs';
	workPrevious.innerHTML = 'Last Week - 36hrs'
	playHours.innerHTML = '10hrs';
	playPrevious.innerHTML = 'Last Week - 8hrs'
	studyHours.innerHTML = '4hrs';
	studyprevious.innerHTML = 'Last Week - 7hrs'
	exHours.innerHTML = '4hrs';
	exprevious.innerHTML = 'Last Week - 5hrs'
	socialhours.innerHTML = '5hrs';
	socialPrevious.innerHTML = 'Last Week - 10hrs';
	schours.innerHTML = '2hrs';
	scPrevious.innerHTML = 'Last Week - 2hrs'
	
}

function clickMonthly(){
	workHours.innerHTML = '103hrs';
	workPrevious.innerHTML = 'Last Month - 128hrs'
	playHours.innerHTML = '23hrs';
	playPrevious.innerHTML = 'Last Month - 29hrs'
	studyHours.innerHTML = '13hrs';
	studyprevious.innerHTML = 'Last Month - 19hrs'
	exHours.innerHTML = '11hrs';
	exprevious.innerHTML = 'Last Month - 18hrs'
	socialhours.innerHTML = '21hrs';
	socialPrevious.innerHTML = 'Last Month - 23hrs';
	schours.innerHTML = '7hrs';
	scPrevious.innerHTML = 'Last Month - 11hrs'
	
}


daily.addEventListener('click', clickDaily);
weekly.addEventListener('click', clickWeekly);
monthly.addEventListener('click', clickMonthly);

// fetch('data.json')
// 	.then(response => response.json())
// 	.then(data => {
// 		console.log(data);
// 		function clickWeekly(){
// 			workHours.innerHTML = `${}`;
// 			workPrevious.innerHTML = 'Last Week - 36hrs'
// 		}
// 	})