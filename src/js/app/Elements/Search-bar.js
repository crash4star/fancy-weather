import Button from './Button';
import Input from './Input';

class Searchbar {
    constructor(searchBy, voice, parent, classStyle) {
        this.voice = voice;
        this.searchBy = searchBy;
        this.parent = parent;
        this.classStyle = classStyle;
    }

    create() {
        const wrapper = document.createElement('div');
        wrapper.className = this.classStyle;

        const wrapperSearchBtn = document.createElement('div');
        wrapperSearchBtn.className = 'input-group-append';

        const searchBtn = new Button('btn btn-secondary header__options-btn header__options-btn--search', 'search-bar-btn', 'Search');

        const searchInput = new Input('text', 'header__search-bar-input', 'search-input', this.searchBy);
        
        wrapper.append(searchInput.create());
        wrapper.append(wrapperSearchBtn);
        wrapperSearchBtn.append(searchBtn.create());

        const parentBlock = document.querySelector(`${this.parent}`);
        parentBlock.append(wrapper);
    }

    delete() {
        const block = document.querySelector(`.${this.classStyle}`);
        block.remove();
    }
}

export default Searchbar;