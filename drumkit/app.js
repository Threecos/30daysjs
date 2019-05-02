
function playSound(e) {
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	const audio = document.querySelector(`.key[data-key="${e.keyCode}"] audio`);
	
	if( !audio ) return false;

	audio.currentTime = 0; // reset sound
	audio.play();
	key.classList.add('playing');
}

let keys = document.querySelectorAll('.key');

keys.forEach(function(key) {
	key.addEventListener('transitionend', (e) => {
		if (e.propertyName != 'transform') return false;
		key.classList.remove('playing');
	});
});


window.addEventListener('keydown', playSound);