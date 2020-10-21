import page from './pageModel';

fixture('Practica 4 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar checkboxes', async t => {
    await t
        .click(page.link4)
    
    // Checking the initial states
    await t
        .expect(page.baseCheckbox.nth(0).checked).eql(false)
        .expect(page.baseCheckbox.nth(1).checked).eql(true)

    // Changing the current states
    await t
        .click(page.baseCheckbox.nth(0))
        .click(page.baseCheckbox.nth(1))

    // Checking the Current states
    await t
        .expect(page.baseCheckbox.nth(0).checked).eql(true)
        .expect(page.baseCheckbox.nth(1).checked).eql(false)

    // Changig back to initial states
    await t
        .click(page.checkbox41)
        .click(page.checkbox42)
    
    // Checking the states
    await t
        .expect(page.checkbox41.checked).eql(false)
        .expect(page.checkbox42.checked).eql(true)

    //The 'notOk' assertion passes if the actual value is falsy
    await t
        .expect(page.baseCheckbox.nth(0).checked).notOk()
        .expect(page.checkbox41.checked).notOk()
    
    //The 'ok'assertion passes if the actual value is truthy
    await t
        .expect(page.baseCheckbox.nth(1).checked).ok()
        .expect(page.checkbox42.checked).ok()
});

test('Probar checkboxes y seleccionados', async t => {
    await t
        .click(page.link4)
    
    // Changing the current states
    await t
        .click(page.baseCheckbox.nth(0))

    // Checking the Current states
    await t
        .expect(page.baseCheckbox.nth(0).checked).eql(true)
        .expect(page.baseCheckbox.nth(1).checked).eql(true)

    //The 'ok'assertion passes if the actual value is truthy
    await t
        .expect(page.baseCheckbox.nth(1).checked).ok()
        .expect(page.checkbox42.checked).ok()
});