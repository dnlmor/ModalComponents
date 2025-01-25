export const eclipseComp = (additionalClass) => {
	const eclipseElem = document.createElement('div');
	eclipseElem.classList.add('eclipseElement', additionalClass);
	return eclipseElem;
  };
  