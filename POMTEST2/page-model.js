import { Selector, t } from 'testcafe';

const label = Selector('label');

class Feature {
    constructor (text) {
        this.label    = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox]');
    }
}

class OperatingSystem {
    constructor (text) {
        this.label       = label.withText(text); //This is a CSS selector for a label element that contains the specified text
        this.radioButton = this.label.find('input[type=radio]'); //This is a CSS selector for an input element of type radio that is a child of the label element with the specified text
    }
}

class Page {
    constructor () {
        this.nameInput             = Selector('#developer-name');
        this.triedTestCafeCheckbox = Selector('#tried-test-cafe');
        this.populateButton        = Selector('#populate');
        this.submitButton          = Selector('#submit-button');  //# is a CSS selector for an element with a specific id
        this.results               = Selector('.result-content');  //. is a CSS selector for an element with a class
        this.commentsTextArea      = Selector('#comments');

        this.featureList = [
            new Feature('Support for testing on remote devices'),
            new Feature('Re-using existing JavaScript code for testing'),
            new Feature('Running tests in background and/or in parallel in multiple browsers'),
            new Feature('Easy embedding into a Continuous integration system'), 
            new Feature('Advanced traffic and markup analysis') //This is the last item in the list, so it doesn't have a comma at the end
        ];

        this.osList = [
            new OperatingSystem('Windows'),
            new OperatingSystem('MacOS'),
            new OperatingSystem('Linux')
        ];

        this.slider = {
            handle: Selector('.ui-slider-handle'),
            tick:   Selector('.slider-value')
        };

        this.interfaceSelect       = Selector('#preferred-interface');
        this.interfaceSelectOption = this.interfaceSelect.find('option'); //This is a CSS selector for an option element that is a child of the element with the id "preferred-interface"
        this.submitButton          = Selector('#submit-button'); //This is a CSS selector for an element with the id "submit-button"
    }

    async submitName (name) {
        await t
            .typeText(this.nameInput, name)
            .click(this.submitButton);
    }
}

export default new Page();