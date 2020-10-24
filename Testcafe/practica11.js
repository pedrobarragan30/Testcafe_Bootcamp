import page from './pageModel';

fixture('Practica 11 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar manejar un Slider Horizontal', async t => {
    await t
        .click(page.link11)

    await t
        .click(page.slider111)
        .typeText(page.slider111, "3.5",{speed:0.1})
        .expect(page.slider111.value).eql('3.5')

});

test('Probar manejar un Slider Horizontal por flechas', async t => {
    await t
        .click(page.link11)
    
    await t
        .click(page.slider111)
        .pressKey('RIGHT')
        .pressKey('RIGHT')
        .pressKey('RIGHT')
        .wait(500)
        .expect(page.slider111.value).eql('1.5')
        .pressKey('RIGHT')
        .pressKey('RIGHT')
        .wait(500)
        .expect(page.slider111.value).eql('2.5')
        .pressKey('LEFT')
        .wait(500)
        .expect(page.slider111.value).eql('2')
});

test('Probar manejar un Slider Horizontal por rango', async t => {
    await t
        .click(page.link11)
    
    await t
        .expect(page.slider111.value).eql('0')
        .typeText(page.slider111, "4.5")
        .expect(page.slider111.value).eql("4.5")
});