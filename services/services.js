import { modalComp } from "../components/modalComp.js";

export const showModal = (className) => {
  const modalTitle = document.createElement('h3');
  const modalBody = document.createElement('div');
  
  if (className === "secondary-btn") {
    modalTitle.textContent = "Secondary Button Modal";
    modalBody.textContent = "This is a secondary button modal.";
  } 
  if (className === "primary-btn") {
    modalTitle.textContent = "Primary Button Modal";
    modalBody.textContent = "This is a primary button modal.";
  }
  if (className === "third-color") {
    modalTitle.textContent = "Third Color Modal";
    
    const img = document.createElement('img');
    img.src = '../assets/mountain.jpeg';
    img.alt = 'Mountain';
    modalBody.appendChild(img);
    modalBody.textContent = "This is the third color button modal with an image.";
  }
  
  document.body.appendChild(modalComp(modalTitle, modalBody, className));
  const modal = document.querySelector(".overlay-modal");
  modal.classList.remove("d-none");
};
