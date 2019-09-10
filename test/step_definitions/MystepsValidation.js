const {Given, Then, When} = require('cucumber');
const fetch = require('node-fetch');

let endpoint;
let response;

Given(/^I am a valid endpoint "([^"]*)"$/, function (endpointUri) {
    endpoint = browser.options.baseUrl + endpointUri;
});
When(/^I submit "([^"]*)" request to the endpoint$/, async function (requestType) {
    response = await fetch(endpoint, {
        method: requestType
    });
    console.log(response.status);
    console.log(response.statusText);
});

Then(/^I should get the details successfully$/, async function () {
    assert.isTrue(response.ok, 'There is a problem with response ' + JSON.stringify(response));
    const responseJson = await response.json();
    console.log(responseJson);
});

When(/^I submit "([^"]*)" request to endpoint$/, async function (requestType) {
    response = await fetch(endpoint, {
        method: requestType
    });
    console.log(response.status);
    console.log(response.statusText);
});

When(/^I submit "([^"]*)" request to create resource$/, async function (requestType) {
    response = await fetch(endpoint, {
        method: requestType,
        body: JSON.stringify({
            title: 'Jagadish',
            body: 'I am good at testing',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
});

Then(/^I should delete successfully$/, async function () {
    assert.isTrue(response.ok, 'There is a problem with response ' + JSON.stringify(response));
    const responseJson = await response.json();
    console.log(responseJson);
});

Then(/^resource should be created successfully$/, async function () {
    assert.isTrue(response.ok, 'There is a problem with response ' + JSON.stringify(response));
});