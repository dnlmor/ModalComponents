import { navBar } from './navBar.js';

export const headerComp = () => {
  const headerElem = document.createElement('header');
  headerElem.style.display = 'flex';
  headerElem.style.justifyContent = 'space-between';
  headerElem.style.alignItems = 'center';
  headerElem.style.padding = '10px';
  headerElem.appendChild(navBar());
  
  return headerElem;
};
