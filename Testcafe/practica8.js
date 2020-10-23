import page from './pageModel';

fixture('Practica 9 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar validar formulario', async t => {
    await t
        .click(page.link8)

    await t
        //validando la presencia/ausencia de los elementos
        .expect(page.input81.visible).ok()
        .expect(page.input82.visible).ok()
        .expect(page.btn83.visible).ok()
        .expect(page.btn85.visible).notOk()

        //dando click en submit sin ingresar datos
        .click(page.btn83)
        .expect(page.error84.innerText).contains('Your username is invalid!')

        //dando click en submit habiendo entrado un usuario incorrecto
        .typeText(page.input81, 'no@email@noemail.com')
        .expect(page.input81.value).eql('no@email@noemail.com')
        .click(page.btn83)
        .expect(page.error84.innerText).contains('Your username is invalid!')

        //dando click en submit habiendo entrado un usuario correcto sin password
        .typeText(page.input81, 'tomsmith')
        .expect(page.input81.value).eql('tomsmith')
        .click(page.btn83)
        .expect(page.error84.innerText).contains('Your password is invalid!')

        //dando click en submit habiendo entrado un usuario correcto con password incorrecto
        .typeText(page.input81, 'tomsmith')
        .expect(page.input81.value).eql('tomsmith')
        .typeText(page.input82, 'SuperDuperSecretPassword!')
        .click(page.btn83)
        .expect(page.error84.innerText).contains('Your password is invalid!')

        //dando click en submit habiendo entrado un usuario incorrecto con password correcto
        .typeText(page.input81, 'tomsmiht')
        .expect(page.input81.value).eql('tomsmiht')
        .typeText(page.input82, 'SuperSecretPassword!')
        .click(page.btn83)
        .expect(page.error84.innerText).contains('Your username is invalid!')

        //dando click en submit habiendo entrado un usuario correcto con password correcto
        .typeText(page.input81, 'tomsmith')
        .expect(page.input81.value).eql('tomsmith')
        .typeText(page.input82, 'SuperSecretPassword!')
        .click(page.btn83)

    await t
        .expect(page.error84.innerText).contains('You logged into a secure area!')
        .click(page.btn85)
    
    await t
        //validando la presencia/ausencia de los elementos
        .expect(page.input81.visible).ok()
        .expect(page.input82.visible).ok()
        .expect(page.btn83.visible).ok()
        .expect(page.btn85.visible).notOk()
});