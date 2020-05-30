class Input {
    constructor(type, classStyle, id, holderText) {
        this.type = type;
        this.classStyle = classStyle;
        this.id = id;
        this.holderText = holderText;
    }

    create() {
        const input = document.createElement('input');
        input.className = this.classStyle;
        input.setAttribute('type', `${this.type}`);
        input.setAttribute('id', `${this.id}`);
        input.placeholder = this.holderText;

        return input;
    }

    insert(element) {
        const block = document.querySelector(`.${this.classStyle}`);
        block.append(element);
    }

    delete() {
        const block = document.querySelector(`.${this.classStyle}`);
        block.remove();
    }
}

export default Input;