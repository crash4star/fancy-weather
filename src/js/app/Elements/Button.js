class Button {
    constructor(classStyle, id, text) {
        this.classStyle = classStyle;
        this.id = id;
        this.text = text;
    }

    create() {
        const btn = document.createElement('button');
        btn.className = this.classStyle;
        btn.setAttribute('id', this.id);
        btn.textContent = this.text;

        return btn;
    }

    insert(element) {
        const btn = document.querySelector(`#${this.id}`);
        btn.append(element);
    }

    delete() {
        const btn = document.querySelector(`#${this.id}`);
        btn.remove();
    }
}

export default Button;