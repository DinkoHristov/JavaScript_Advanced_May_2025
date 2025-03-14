class Contact {
    constructor(firstName, lastName, phone, email, online = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = online;

        this._element = null;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        if (this._element) {
            let divTitle = this._element.querySelector('.title');
            if (value) {
                divTitle.classList.add('online');
            } else {
                divTitle.classList.remove('online');
            }
        }
    }

    render(selector) {
        let documentElement = document.getElementById(selector);
        this._element = this.createNewElement();
        documentElement.appendChild(this._element);
    }

    createNewElement() {
        let article = document.createElement('article');

        let divTitle = document.createElement('div');
        divTitle.classList.add('title');
        divTitle.innerHTML = `${this.firstName} ${this.lastName}`;

        if (this._online) {
            divTitle.classList.add('online')
        }

        let button = document.createElement('button');
        button.innerHTML = '&#8505;';
        button.addEventListener('click', (e) => this.infoButtonClicked(e));

        divTitle.appendChild(button);

        let divInfo = document.createElement('div');
        divInfo.classList.add('info');
        divInfo.style.display = 'none';

        let spanPhone = document.createElement('span');
        spanPhone.innerHTML = `&phone; ${this.phone}`;

        let spanEmail = document.createElement('span');
        spanEmail.innerHTML = `&#9993; ${this.email}`;

        divInfo.appendChild(spanPhone);
        divInfo.appendChild(spanEmail);

        article.appendChild(divTitle);
        article.appendChild(divInfo);

        return article;
    }

    infoButtonClicked(e) {
        let divInfo = this._element.querySelector('.info');

        if (divInfo.style.display === 'none') {
            divInfo.style.display = 'block'; // Show info
        } else {
            divInfo.style.display = 'none'; // Hide info
        }
    }
}

document.body.innerHTML = `<div id="holder"></div>`;

let contact = new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com");
contact.render('holder');

setTimeout(() => {
    contact.online = true;
}, 2000);