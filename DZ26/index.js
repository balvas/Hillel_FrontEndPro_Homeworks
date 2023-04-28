class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}

class TextElement extends FormElement {
    constructor(name, type, value, placeholder) {
        super(name, type, value);
        this.placeholder = placeholder;
    }
    createInput() {
        const input = document.createElement('input');
        input.type = this.type;
        input.name = this.name;
        input.placeholder = this.placeholder;
        return input;
    }
}

class CheckboxElement extends FormElement {
    constructor(name, type, value, checked, description) {
        super(name, type, value);
        this.checked = checked;
        this.description = description;
    }
    createInput() {
        const input = document.createElement('input');
        input.type = this.type;
        input.name = this.name;
        input.checked = this.checked;
        input.required = true;
        const label = document.createElement('label');
        label.appendChild(input);
        const descriptionSpan = document.createElement('span');
        descriptionSpan.appendChild(document.createTextNode(this.description));
        label.appendChild(descriptionSpan);
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox');
        checkboxContainer.appendChild(label);
        return checkboxContainer;
    }
}


class ButtonElement extends FormElement {
    constructor(name, type, value) {
        super(name, type, value);
    }
    createButton() {
        const button = document.createElement('button');
        button.type = this.type;
        button.name = this.name;
        button.textContent = this.value;
        return button;
    }
}

const usernameElement = new TextElement("username", "text", "", "Enter username");
const usernameInput = usernameElement.createInput();

const useremailElement = new TextElement("useremail", "text", "", "Enter e-mail");
const useremailInput = useremailElement.createInput();

const passwordElement = new TextElement("password", "password", "", "Enter password");
const passwordInput = passwordElement.createInput();
const passwordrepeatElement = new TextElement("passwordrepeat", "password", "", "Repeat password");
const passwordrepeatInput = passwordrepeatElement.createInput();

const agreementElement = new CheckboxElement("agreement", "checkbox", "1", false, "I agree all statements in Terms of Service");
const agreementInput = agreementElement.createInput();

const submitButtonElement = new ButtonElement("submit", "submit", "Register");
const submitButton = submitButtonElement.createButton();


const form = document.createElement('form');

form.appendChild(usernameInput);
form.appendChild(useremailInput);
form.appendChild(passwordInput);
form.appendChild(passwordrepeatInput);
form.appendChild(agreementInput);
form.appendChild(submitButton);


const formContainer = document.createElement('div');
formContainer.classList.add('form')
formContainer.appendChild(form);
document.body.appendChild(formContainer);


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
});