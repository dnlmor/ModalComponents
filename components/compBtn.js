export const button = (text, onClick, className) => {
	// Create button element
	const btnElem = document.createElement('button');
	
	// Add the text to the button
	btnElem.textContent = text;
	
	// Add the function to the button
	btnElem.addEventListener('click', onClick);
	
	// Add the classes to the button
	btnElem.classList.add('btn', className);
	
	return btnElem;
  };
  