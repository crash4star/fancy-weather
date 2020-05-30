class Block {
    constructor(tag, classStyle, parent, id) {
        this.tag = tag;
        this.classStyle = classStyle;
        this.parent = parent;
        this.id = id;
    }
    
    create() {
        const block = document.createElement(`${this.tag}`);
        block.className = this.classStyle;
        block.setAttribute('id', this.id);

        const parentBlock = document.querySelector(`${this.parent}`);
        
        parentBlock.append(block);
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
