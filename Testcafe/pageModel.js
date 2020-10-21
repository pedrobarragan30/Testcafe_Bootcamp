import { Selector } from 'testcafe';

class Page
{
    constructor()
    {
        // Practica 2
        this.link2 = Selector('a').withText('A/B Testing');
        this.text21 = Selector('#content > div > h3');

        // Practica 3
        this.link3 = Selector('a').withText('Forgot Password');
        this.input31 = Selector('#email');
        this.button32 = Selector('#form_submit');
        this.text33 = Selector('#content');
        this.error34 = Selector('body > h1');

        // Practica 4
        this.link4 = Selector('a').withText('Checkboxes');
        //Checkbox Padre
        this.baseCheckbox = Selector('#checkboxes > input[type=checkbox]');

        //Checkbox Hijos
        this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(1)');
        this.checkbox42 = Selector('#checkboxes > input[type=checkbox]:nth-child(3)');

        // Practica 5
        this.link5 = Selector('a').withText('Inputs')
        this.input51 = Selector('#content > div > div > div > input[type=number]');
    
        // Practica 6
        this.link6 = Selector('a').withText('Add/Remove Elements');
        this.addBtn61 = Selector('#content > div > button');
        this.removeBtn62 = Selector('#elements > button');
/*
        #elements > button:nth-child(1)
        #elements > button:nth-child(5)
*/      
    
    }
}

export default new Page();