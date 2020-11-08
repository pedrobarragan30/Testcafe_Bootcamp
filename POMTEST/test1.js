import { getToken } from './helper.js'

fixture("test2")
        .page ('http://automationpractice.com');

test('test2', async t => {
    console.log('token2: ' + getToken());
});