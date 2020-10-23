import page from './pageModel.js';

fixture('Rellenar un formulario')
    .page('https://formy-project.herokuapp.com/form');

test('Probando primer formulario', async t => {
    await t
        .typeText(page.input71, "Pedro", {speed:0.1})
        .expect(page.input71.value).eql("Pedro")
        .typeText(page.input72, "Barragan")
        .expect(page.input72.value).eql("Barragan")
        .typeText(page.input73, "Software Engineer in Test")
        .expect(page.input73.value).eql("Software Engineer in Test")


        .expect(page.rbtn74.checked).notOk()
        .expect(page.rbtn75.checked).notOk()
        .expect(page.rbtn76.checked).notOk()
        .click(page.rbtn74)
        .expect(page.rbtn74.checked).ok()
        .click(page.rbtn75)
        .expect(page.rbtn75.checked).ok()
        .click(page.rbtn76)
        .expect(page.rbtn76.checked).ok()

        .expect(page.checkbox77.checked).notOk()
        .expect(page.checkbox78.checked).notOk()
        .expect(page.checkbox79.checked).notOk()
        .click(page.checkbox77)
        .expect(page.checkbox77.checked).ok()
        .click(page.checkbox78)
        .expect(page.checkbox78.checked).ok()
        .click(page.checkbox79)
        .expect(page.checkbox79.checked).ok()

        .click(page.smenu701)
        .click(page.opt702)
        .typeText(page.date703, "10222020")

        .click(page.btn704)

    await t
        .expect(page.text705.visible).ok()
        //this.text705 = Selector('body > div > div');
});