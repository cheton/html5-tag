import escapeHTML from 'escape-html';

module.exports = (tag = 'div', attrs = {}, text) => {
    let html = '<' + tag;

    Object.keys(attrs).forEach(name => {
        if (name) {
            let value = escapeHTML(attrs[name]);
            html += ' ' + name + '="' + value + '"';
        }
    });
    html += (text !== undefined) ? '>' + text + '</' + tag + '>' : '/>';

    return html;
};
