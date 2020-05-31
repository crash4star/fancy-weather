class App {
    constructor(root) {
        this.root = root;
    }

    insert(element) {
        const appBlock = document.querySelector(`#${this.root}`);
        appBlock.append(element);
    }
}

export default App;