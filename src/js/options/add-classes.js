function addClasses(styles, element) {
    styles.forEach(item => {
        element.classList.add(`${item}`);
    });

    return element;    
}

export default addClasses;