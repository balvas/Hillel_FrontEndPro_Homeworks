function FormValidate(_form) {
    const errorWrapperClass = 'error';
    const errorItemClass = 'error_item';
    const parentItemClass = 'form-control';
    const _elements = _form.elements;
    _form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.checkFormElements();
        // this.checkForm();
    })
    this.checkFormElements = function () {
        for (let i = 0; i < _elements.length; i++) {
            const _element = _elements[i];
            const reqMessage = _element.dataset.req;
            const emailMessage = _element.dataset.email;
            const passwordMessage = _element.dataset.password;
            const minMessage = _element.dataset.min_message;
            this.clearError(_element);
            if (reqMessage) {
                this.checkRequired(_element, reqMessage);
            }
            if (emailMessage) {
                this.checkEmail(_element, emailMessage);
            }
            if (passwordMessage) {
                this.checkPassword(passwordMessage);
            }
            if (minMessage) {
                this.checkMinLength(_element, minMessage);
            }
        }
    }
    this.checkPassword = function (passwordMessage) {
        const allPasswordElement = _form.querySelectorAll('input[type="password"]');
        const valueElement = Array.from(allPasswordElement).map(item => item.value);
        const uppercaseRegex = /[A-Z]/;
        const digitRegex = /\d/;
        const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;

        if ((new Set(valueElement)).size > 1) {
            allPasswordElement.forEach(fieldItem => {
                if (fieldItem.value.length < 8) {
                    this.errorTemplate(fieldItem, passwordMessage);
                    this.errorTemplate(fieldItem, 'Минимальная длина пароля - 8 символов.');
                }
                if (!uppercaseRegex.test(fieldItem.value)) {
                    this.errorTemplate(fieldItem, 'Пароль должен содержать минимум одну заглавную букву.');
                }
                if (!digitRegex.test(fieldItem.value)) {
                    this.errorTemplate(fieldItem, 'Пароль должен содержать минимум одну цифру.');
                }
                if (!punctuationRegex.test(fieldItem.value)) {
                    this.errorTemplate(fieldItem, 'Пароль должен содержать минимум один знак пунктуации.');
                }
            })
        }
    }
    this.checkEmail = function (_element, emailMessage) {
        const emailString = _element.value;
        if (emailString.includes('@') === false) {
            this.errorTemplate(_element, emailMessage)
        }
    }
    this.checkMinLength = function (_element, minMessage) {
        const minLength = _element.dataset.min_length;
        const elementLength = _element.value.length;
        if (elementLength < minLength) {
            this.errorTemplate(_element, minMessage.replace('N', minLength));
        }
    }
    this.checkRequired = function (_element, reqMessage) {
        const notValidString = _element.value.length === 0;
        const notValidChecked = _element.type === 'checkbox' && _element.checked === false;
        if (notValidString || notValidChecked) {
            this.errorTemplate(_element, reqMessage)
        }
    }
    this.errorTemplate = (_element, reqMessage) => {
        const parent = _element.closest(`.${parentItemClass}`);
        // if (parent.classList.contains(errorWrapperClass) === false) {
        parent.classList.add(errorWrapperClass);
        parent.insertAdjacentHTML('beforeend', `<small class="${errorItemClass}">${reqMessage}</small>`)
        // }
    }
    this.clearError = function (_element) {
        const parent = _element.closest(`.${parentItemClass}`);
        if (parent !== null && parent.classList.contains(errorWrapperClass) === true) {
            parent.classList.remove(errorWrapperClass);
            parent.querySelectorAll(`.${errorItemClass}`).forEach(item => item.remove());
        }
    }
}

new FormValidate(document.querySelector('#form'))
