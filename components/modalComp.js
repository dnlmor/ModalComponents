export const modalComp = (modalTitle, modalBody, className) => {
	const modalOverlay = document.createElement('div');
	modalOverlay.classList.add('overlay-modal', className);
	
	const modalContainer = document.createElement('div');
	modalContainer.classList.add('modal-container');
	
	const titleElem = document.createElement('h2');
	titleElem.textContent = modalTitle;
	
	const bodyElem = document.createElement('div');
	bodyElem.classList.add('modal-body');
	bodyElem.appendChild(modalBody);
	
	modalContainer.appendChild(titleElem);
	modalContainer.appendChild(bodyElem);
	modalOverlay.appendChild(modalContainer);
	
	return modalOverlay;
  };
  