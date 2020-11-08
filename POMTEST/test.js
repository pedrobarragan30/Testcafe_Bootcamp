import { getToken, setToken } from './helper.js'

fixture("test1")
        .page ('http://automationpractice.com');

test('test1', async t => {
    console.log('token: ' + getToken());
    setToken(222);
});