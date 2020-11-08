import { Selector } from 'testcafe';

import page from './page-model';

fixture `Page Model`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Text typing basics', async t => {
    await t
        .typeText(page.nameInput, 'Peter')
        .wait(1000)
        .typeText(page.nameInput, 'Paker', { replace: true })
        .wait(1000)
        .typeText(page.nameInput, 'r', { caretPos: 2 })
        .wait(1000)
        .expect(page.nameInput.value).eql('Parker');
});

test('Click check boxes and then verify their state', async t => {
    for (const feature of page.featureList) {
        await t
            .click(feature.label)
            .expect(feature.checkbox.checked).ok();
    }
});

test('Submit a developer name and check the header', async t => {
    const header = Selector('#article-header');

    await t 
        .wait(1000)
        page.submitName('Peter');
    await t
        .wait(1000)
        .expect(header.innerText).eql('Thank you, Peter!')
        .wait(1000)

});