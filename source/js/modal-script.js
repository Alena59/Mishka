const linkElem =  document.querySelector('.best-product__link');
const modalElem = document.querySelector('.modal');

modalElem.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`;

const closeModal = ({target}) => {
  if (target === modalElem || target.closest('.modal__close')) {
    modalElem.style.opacity = 0;
    setTimeout(() => {
      modalElem.style.visibility = 'hidden';
    }, 300)
  }
}

const openModal = () => {
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
}

linkElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);


