class App {
    constructor(root) {
        this.root = root;
    }

    insert(element) {
        const appBlock = document.querySelector(`#${this.root}`);
        appBlock.append(element);
    }

    loading(status) {
        const appBlock = document.querySelector(`#${this.root}`);
        const blur = document.createElement('div');
        const loader = document.createElement('div');
        loader.classList.add('loader');
        blur.classList.add('blur');
        
        if (status) {
            appBlock.append(blur);
            appBlock.append(loader);
        } else {
            loader.remove();
            blur.remove();
        }
    }
}

export default App;