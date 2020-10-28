import page from './PageObjectModel';
import { data } from './data';

fixture('Pruebas de modulo mi cuenta')
    .page ('http://automationpractice.com');

test('Crear una cuenta', async t =>
{

    await t
        .click(page.signIn_link)
    console.log("Correo: ", data.email)
    console.log("firstName: ", data.firstName)
    console.log("lastName: ", data.lastName)
    console.log("Password: ", data.password)
    console.log("P Box: ", data.pbox)
    
    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)

    await t
        .expect(page.email_form.value).contains(data.email)
        .expect(page.email_form.hasAttribute('readonly')).notOk()

        .typeText(page.firstName_input, data.firstName)
        .typeText(page.lastName_input, data.lastName)

        .expect(page.firstName_Address.value).contains(data.firstName)
        .expect(page.lastName_Address.value).contains(data.lastName)

        .typeText(page.password_input, data.password)
        .typeText(page.address, data.pbox)

        .typeText(page.city, data.city)
        //.expect(page.city).contains(data.city)

        //.click(page.state)
        .typeText(page.zip_Code, data.zipCode)
        //.click(page.country)
        .typeText(page.mobile_Phone, data.mobilePhone)
        .typeText(page.alias, data.alias)

        .wait(6000)
        //.click(page.register)
});


test('Loggearse con una nueva cuenta', async t => {});
test('Logout', async t => {});
test('Crear una cuenta con un correo ya existente', async t => {});
test('Validar recuperar el password con un correo valido', async t => {});
test('Validar recuperar  password con un correo no valido', async t => {});
test('Cambiar información de mi cuenta', async t => {});