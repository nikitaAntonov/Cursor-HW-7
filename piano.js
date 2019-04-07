const getKey = [
{keyA: document.getElementById('a'), soundA: new Audio('audio/1.mp3'), codeA: 65},
{keyS: document.getElementById('s'), soundS: new Audio('audio/2.mp3'), codeS: 83},
{keyD: document.getElementById('d'), soundD: new Audio('audio/3.mp3'), codeD: 68},
{keyF: document.getElementById('f'), soundF: new Audio('audio/4.mp3'), codeF: 70},
{keyG: document.getElementById('g'), soundG: new Audio('audio/5.mp3'), codeG: 71},
{keyH: document.getElementById('h'), soundH: new Audio('audio/6.mp3'), codeH: 72},
{keyJ: document.getElementById('j'), soundJ: new Audio('audio/7.mp3'), codeJ: 74},
{keyK: document.getElementById('k'), soundK: new Audio('audio/8.mp3'), codeK: 75}
];

// MOUSE USE

function mouse(key, sound) {
	key.addEventListener("mousedown", function (event) {
		sound.currentTime = 0
		sound.play();
	});
}
mouse(getKey[0].keyA, getKey[0].soundA);
mouse(getKey[1].keyS, getKey[1].soundS);
mouse(getKey[2].keyD, getKey[2].soundD);
mouse(getKey[3].keyF, getKey[3].soundF);
mouse(getKey[4].keyG, getKey[4].soundG);
mouse(getKey[5].keyH, getKey[5].soundH);
mouse(getKey[6].keyJ, getKey[6].soundJ);
mouse(getKey[7].keyK, getKey[7].soundK);

//KEYBOARD USE
function keyboard(key, sound, code) {
	document.addEventListener('keydown', function(event) {
		if (event.keyCode == code) {
			sound.currentTime = 0
			sound.play();
			key.style.transform="scale(0.97)";
			key.style.boxShadow="0 0 0px rgba(0,0,0,0.2), inset 0 0 0px rgba(0,0,0,0.2)";
		}
	})

	document.addEventListener('keyup', function(event) {
		if (event.keyCode == code) {
			key.style.transform="";
			key.style.boxShadow="";
		}
	})
}
keyboard(getKey[0].keyA, getKey[0].soundA, getKey[0].codeA);
keyboard(getKey[1].keyS, getKey[1].soundS, getKey[1].codeS);
keyboard(getKey[2].keyD, getKey[2].soundD, getKey[2].codeD);
keyboard(getKey[3].keyF, getKey[3].soundF, getKey[3].codeF);
keyboard(getKey[4].keyG, getKey[4].soundG, getKey[4].codeG);
keyboard(getKey[5].keyH, getKey[5].soundH, getKey[5].codeH);
keyboard(getKey[6].keyJ, getKey[6].soundJ, getKey[6].codeJ);
keyboard(getKey[7].keyK, getKey[7].soundK, getKey[7].codeK);