class Block {
    constructor(tag, classStyle, parent) {
        this.tag = tag;
        this.classStyle = classStyle;
        this.parent = parent;
    }
    
    create() {
        const block = document.createElement(`${this.tag}`);
        block.className = this.classStyle;

        const container = document.createElement('div');
        container.className = 'container';
        container.append(block);

        const parentBlock = document.querySelector(`${this.parent}`);
        
        parentBlock.append(container);
    }

    delete() {
        const block = document.querySelector(`.${this.classStyle}`);
        block.remove();
    }

    insert(element) {
        const block = document.querySelector(`.${this.classStyle}`);
        block.append(element);
    }

    getBlock() {
        const block = document.querySelector(`.${this.classStyle}`);
        return block;
    }
}

export default Block;
