function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const changeColorBtn = document.querySelector('.change-color');
  const colorNameSpan = document.querySelector('.color');
  const body = document.querySelector('body');
  

  const onBtnClick = () => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
    colorNameSpan.textContent = body.style.backgroundColor;
  };
  
  changeColorBtn.addEventListener('click', onBtnClick);