import Button from './Button';

class Dropdown {
    constructor(classStyle, id, items) {
        this.classStyle = classStyle;
        this.id = id;
        this.items = items;
    }

    create() {
        const dropdownWrapper = document.createElement('div');
        dropdownWrapper.className = this.classStyle;
        dropdownWrapper.setAttribute('id', this.id);
        
        const dropdownStartItem = [];

        const dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'dropdown-menu';

        this.items.forEach(item => {
            const itemBlock = document.createElement('a');
            itemBlock.setAttribute('href', '#');
            itemBlock.className = 'dropdown-item';
            itemBlock.textContent = item;

            if (dropdownStartItem < 2) {
                dropdownStartItem.push(item);
            }
            dropdownMenu.append(itemBlock);
        });

        const dropdownBtn = new Button('btn btn-secondary header__options-btn header__options-btn--drop dropdown-toggle', 'drop-languages', dropdownStartItem[0]);
        dropdownWrapper.append(dropdownBtn.create());

        dropdownWrapper.append(dropdownMenu);

        return dropdownWrapper;
    }

    insert(element) {
        const block = document.querySelector(`#${this.id}`);
        block.append(element);
    }

    delete() {
        const block = document.querySelector(`#${this.id}`);
        block.remove();
    }
}

export default Dropdown;