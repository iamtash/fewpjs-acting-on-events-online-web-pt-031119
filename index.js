dodger.style.right = '180px'

function moveDodgerLeft() {
	let leftNumbers = dodger.style.left.replace('px', '');
	let left = parseInt(leftNumbers, 10);
	let rightNumbers = dodger.style.right.replace('px', '');
	let right = parseInt(rightNumbers, 10);

	if (left > 0) {
		dodger.style.left = `${left - 1}px`;
		dodger.style.right = `${right + 1}px`;	
    }
}

function moveDodgerRight() {
	let leftNumbers = dodger.style.left.replace('px', '');
	let left = parseInt(leftNumbers, 10);
	let rightNumbers = dodger.style.right.replace('px', '');
	let right = parseInt(rightNumbers, 10);

	if (right > 0) {
		dodger.style.left = `${left + 1}px`;
		dodger.style.right = `${right - 1}px`;	
    }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
		moveDodgerRight();
  	}
});