import page from './pageModel';

fixture('Practica 3 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test ('Probar que aparece correctamente el input y el boton', async t => {
    await t
        .click(page.link3)

    await t
        .expect(page.input31.exists).ok()
        .expect(page.button32.exists).ok()
});

test('Probar escribir que podemos escribir un email', async t=> {
    await t
        .click(page.link3)

    await t
        .typeText(page.input31, 'noemail@noemail.com')
        .expect(page.input31.value).eql('noemail@noemail.com')
});

test('Probar el envio del email correctamente', async t =>{
    await t
        .click(page.link3)

    await t
        .typeText(page.input31, 'noemail@noemail.com')
        .expect(page.input31.value).eql('noemail@noemail.com')
        .click(page.button32)

    await t
        .expect(page.text33.innerText).contains('sent','Prueba exitosa')
});