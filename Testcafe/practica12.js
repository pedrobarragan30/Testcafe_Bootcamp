import page from './pageModel';

fixture('Practica 12 con testcafe')
    .page ('https://devexpress.github.io/testcafe/example/');

test('Mover un slide', async t => {
    await t
        .click(page.checkboxTried)
        .expect(page.checkboxTried.checked).ok()

        .dragToElement(page.slider.handle, page.slider.value.withText('9'))    
        .wait(500)
});