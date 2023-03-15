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

// Функция, которая изменяет текст инпута на красный, если есть ошибка
const showInputErrorText = (formElement, inputElement) => {
	inputElement.classList.add('form__input_text_error');
};

// Функция, которая возвращает цвет текста при исправлении 
const hideInputErrorText = (formElement, inputElement) => {
	inputElement.classList.remove('form__input_text_error');
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
		showInputErrorText(formElement, inputElement)
  } else {
    hideInputError(formElement, inputElement);
		showInputSuccess(formElement, inputElement);
		hideInputErrorText(formElement, inputElement);
  }
};

// Функция проверки валидности полей формы
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

// Функция состояния кнопки submit
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__button_type_inactive');
  } else {
    buttonElement.classList.remove('form__button_type_inactive');
  }
}; 

//  Установим слушатель событий
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
	const buttonElement = formElement.querySelector('.form__button');
	
	toggleButtonState(inputList, buttonElement)

	inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement)

			toggleButtonState(inputList, buttonElement);
    });
  });
}; 

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
	formList.forEach((formElement) => {
		formElement.addEventListener('submit', (evt)=> {
			evt.preventDefault();
		})
				setEventListeners(formElement);
			});
		};

enableValidation(); 



// Функция всплывающего окна (при необходимости заменить код на onclick кнопки отправки формы)
function showRegistration () {
	alert("Регистрация прошла успешно")
}
