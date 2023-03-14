const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

	inputElement.classList.add('form__input_type_error');
	errorElement.textContent = errorMessage;
	
	errorElement.classList.add('form__input-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {

	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove('form__input_type_error');
	errorElement.classList.remove('form__input-error_active');
	errorElement.textContent = '';
};

// Функция, которая добавляет класс с успешной формой заполнения
const showInputSuccess = (formElement, inputElement) => {
	inputElement.classList.add('form__input_type_success');
};

//Функция, которая изменяет текст инпута на красный, если есть ошибка
const showInputErrorText = (formElement, inputElement) => {
	inputElement.classList.add('form__input_text_error');
}

//Функция, которая возвращает цвет текста при исправлении 
const hideInputErrorText = (formElement, inputElement) => {
	inputElement.classList.remove('form__input_text_error')
}

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, inputElement.validationMessage);
		showInputErrorText(formElement, inputElement)
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement);
		showInputSuccess(formElement, inputElement);
		hideInputErrorText(formElement, inputElement);
  }
};


const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement)
    });
  });
}; 

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.form'));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

// Вызовем функцию
enableValidation(); 