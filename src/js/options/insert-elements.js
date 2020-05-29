import addClasses from './add-classes';

function insertElements(insert, langs, tag, style) {
    langs.forEach(item => {
        const create = document.createElement(`${tag}`);
        create.classList.add(`${style}`);
        create.textContent = `${item}`;

        if (tag === 'a') {
            create.setAttribute('href', '#');
        }

        insert.append(create)
        
    });
}

export default insertElements;