class ToggleBtn {
    constructor(btns) {
        this.btns = btns;
    }

    create() {
        const toggleWrapper = document.createElement('div');
        toggleWrapper.className = 'header__options-bar--unit';
        
        this.btns.forEach(btn => {
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'btn btn-secondary header__options-btn header__options-btn--unit';
            toggleBtn.setAttribute('id', `unit-${btn}`);
            toggleBtn.textContent = btn;

            toggleWrapper.append(toggleBtn);
        });

        return toggleWrapper;
    }
}

export default ToggleBtn;