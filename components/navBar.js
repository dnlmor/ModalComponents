export const navBar = () => {
	const navElem = document.createElement('nav');
	const ulElem = document.createElement('ul');
	
	// Create menu items
	const menuItems = ['Home'];
	menuItems.forEach(item => {
	  const liElem = document.createElement('li');
	  const aElem = document.createElement('a');
	  aElem.textContent = item;
	  aElem.href = '#';
	  liElem.appendChild(aElem);
	  ulElem.appendChild(liElem);
	});
	
	navElem.appendChild(ulElem);
	return navElem;
  };  