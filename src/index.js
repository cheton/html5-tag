import escapeHTML from 'escape-html';

// @param {string} [tag] The tag name. Defaults to 'div'.
// @param {object} attrs HTML attributes.
// @param {string} [text] The content string.
module.exports = (tag, attrs, text) => {
    if (typeof tag === 'object') {
        text = attrs;
        attrs = tag;
        tag = 'div';
    }

    let html = '<' + tag;

    attrs = { ...attrs };
    Object.keys(attrs).forEach(name => {
        if (name) {
            let value = escapeHTML(attrs[name]);
            html += ' ' + name + '="' + value + '"';
        }
    });

    html += (text !== undefined) ? '>' + text + '</' + tag + '>' : '/>';

    return html;
};
