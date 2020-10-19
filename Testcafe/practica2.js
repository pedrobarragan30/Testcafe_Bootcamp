import { Selector } from 'testcafe';
import page from './pageModel';

fixture('Practica 2 con testcafe')
    .page('https://the-internet.herokuapp.com/');

 test('Dar click en enlace', async t => {
    await t
        .click(page.link2)

    const text = await Selector(page.text21).innerText;
    console.log(text)
    
    await t
    //if (page.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Variation" )
    if (text == "A/B Test Contro" || text == "A/B Test Variation 1" || text == "A/B Test Variation")
    {
        console.log ("Pasa prueba")
        await t
            .expect(true).ok()
    }
    else
    {
        console.log ("No pasa")
        await t
            .expect(true).notOk()
    }
});