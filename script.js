// script.js

import { button } from './components/compBtn.js';
import { eclipseComp } from './components/eclipseComp.js';
import { headerComp } from './components/headerComp.js';
import { showModal } from './services/services.js';

document.body.appendChild(headerComp());

// Create Buttons
const primaryBtn = button('Primary Button', () => showModal('primary-btn'), 'primary-btn');
const secondaryBtn = button('Secondary Button', () => showModal('secondary-btn'), 'secondary-btn');
const thirdBtn = button('Third Color Button', () => showModal('third-color'), 'third-color');

// Append buttons to content
const content = document.getElementById('content');
content.appendChild(primaryBtn);
content.appendChild(secondaryBtn);
content.appendChild(thirdBtn);

// Create Eclipse Elements
const eclipse = eclipseComp('primary');
content.appendChild(eclipse);
