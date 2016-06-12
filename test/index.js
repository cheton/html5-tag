import { test } from 'tap';
import tag from '../src';

test('a tag', (t) => {
    const result = tag('a', {
        class: 'btn btn-link',
        href: 'http://github.com/cheton/html-tag',
    }, 'http://github.com/cheton/html-tag');
    const wanted = '<a class="btn btn-link" href="http://github.com/cheton/html-tag">http://github.com/cheton/html-tag</a>'
    t.same(result, wanted);
    t.end();
});

test('input tag', (t) => {
    const result = tag('input', {
        name: 'name',
        value: 'Input your name...'
    });
    const wanted = '<input name="name" value="Input your name..."/>';
    t.same(result, wanted);
    t.end();
});

test('escape html', (t) => {
    const result = tag('div', {
        class: 'container',
        title: '\'"&<>'
    }, tag('i', { class: 'icon' }));
    const wanted = '<div class="container" title="&#39;&quot;&amp;&lt;&gt;"><i class="icon"/></div>';
    t.same(result, wanted);
    t.end();
});
