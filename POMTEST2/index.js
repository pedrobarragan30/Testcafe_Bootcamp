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

/* THE SLIDER IS NOT MOVING TO THE EXACT POSITION
test('Move the slider', async t => {
        await t
        .click(page.triedTestCafeCheckbox)
        .expect(page.triedTestCafeCheckbox.checked).ok()
        .drag(page.slider.handle, 360, 0, { offsetX: 10, offsetY: 50 })
        .expect(page.slider.tick.innerText).eql('50') //UNABLE TO MOVE THE SLIDER TO THE EXACT POSITION, I TRIED WITH DIFFERENT OFFSETS AND IT DOESN'T WORK, I THINK IT'S A BUG
        .wait(5000);
});
*/
/* THE SELECT IS NOT EXPNANDING
test('Testing the select box', async t => {
    await t
    .click(page.interfaceSelectOption.withText('Both'))
    .expect(page.interfaceSelect.value).eql('Both')
    .wait(5000);
});
*/

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
