const nameInput = document.querySelector('input');
const nameSpan = document.querySelector('#name-output');

const greetUser = () => {
    const editedInputTextContent = nameInput.value.trim();

    if(editedInputTextContent === '') {
        nameSpan.textContent ='Anonymous';

        nameInput.classList.remove('correct');
        nameInput.classList.add('incorrect');
    } else {
        nameSpan.textContent = editedInputTextContent;
        
        nameInput.classList.remove('incorrect');
        nameInput.classList.add('correct');
    }
};

nameInput.addEventListener('input', greetUser);