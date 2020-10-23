import page from './pageModel';

fixture('Practica 6 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar agregar y quitar boton', async t => {
    await t
        .click(page.link6)
        .wait(15000)
  
    await t
        .expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)
        .expect(page.removeBtn62.visible).ok()
        .wait(3000)
        .click(page.removeBtn62)
        .expect(page.removeBtn62.visible).notOk()

});

test('Agregar 5 botones y quitar el tercer boton', async t => {
    await t
        .click(page.link6)
        .wait(1500)
  
    await t
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)

        .expect(page.removeBtn62.visible).ok()
        .expect(page.removeBtn63.visible).ok()
        .expect(page.removeBtn64.visible).ok()
        .expect(page.removeBtn65.visible).ok()
        .expect(page.removeBtn66.visible).ok()

        .wait(3000)
        .click(page.removeBtn64)
        .expect(page.removeBtn66.visible).notOk()
});

test('Agregar y quitar botones usando parent', async t => {
    await t
        .click(page.link6)
        .wait(1500)
  
    await t
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)

        .expect(page.removeBtn62.visible).ok()
        .expect(page.removeBtn63.visible).ok()
        .expect(page.removeBtn64.visible).ok()
        .expect(page.removeBtn65.visible).ok()
        .expect(page.removeBtn66.visible).ok()

        .wait(3000)
        .click(page.removeBtn62.nth(4))
        .click(page.removeBtn62.nth(2))
        .click(page.removeBtn62.nth(0))

        .expect(page.removeBtn62.nth(3).visible).notOk()
        .expect(page.removeBtn62.nth(4).visible).notOk()
        .expect(page.removeBtn62.nth(5).visible).notOk()
});