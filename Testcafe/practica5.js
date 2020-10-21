import page from './pageModel';

fixture('Practica 5 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Escribir letras', async t => {
    await t
        .click(page.link5)

    await t
        .typeText(page.input51,"letras", {speed: 0.1}) 
        .expect(page.input51.value).eql("")
});

test('Escribir numeros', async t => {
    await t
        .click(page.link5)

    await t
        .typeText(page.input51,"87979879", {speed: 0.1}) 
        .expect(page.input51.value).notEql("7687")
        .expect(page.input51.value).eql("87979879")
});

test('Escribir numeros', async t => {
    await t
        .click(page.link5)

    await t
        .typeText(page.input51,"SOMETEXT TO REPLACE", {speed: 0.1}) 
        .typeText(page.input51,"666", {replace: true})
        .typeText(page.input51,"·%·$%·$$%&8$%-**+^*[]{}¡‚´‚´‚!´", {replace: true})

    await t
        .expect(page.input51.value).eql("")
});