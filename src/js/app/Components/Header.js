import Block from '../Block';
import Button from '../Elements/Button';
import Dropdown from '../Elements/Dropdown';
import ToggleBtn from '../Elements/Toggle-btn';

class Header extends Block {
    constructor(parent) {
        super();
        this.parent = parent;
    }

    elements() {
        const header = new Block('header', 'header', `${this.parent}`);
        header.create();

        const headerBar = new Block('div', 'header__options-bar', `.${header.classStyle}`);
        headerBar.create();
        
        const updateBgBtn = new Button('btn btn-secondary header__options-btn header__options-btn--picture', 'picture-update');
        const iconForBtn = document.createElement('i');
        iconForBtn.className = 'fas fa-sync-alt';

        headerBar.insert(updateBgBtn.create());
        updateBgBtn.insert(iconForBtn);

        const dropdownLangMenu = new Dropdown('dropdown', 'dropdown-lang-menu', ['EN', 'RU', 'BE']);
        headerBar.insert(dropdownLangMenu.create());

        const choiceUnitBtns = new ToggleBtn(['c', 'f']);
        headerBar.insert(choiceUnitBtns.create());
    }
}

export default Header;