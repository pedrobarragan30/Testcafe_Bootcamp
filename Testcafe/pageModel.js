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
        this.link5 = Selector('a').withText('Inputs');
        this.input51 = Selector('#content > div > div > div > input[type=number]');
    
        // Practica 6
        this.link6 = Selector('a').withText('Add/Remove Elements');
        this.addBtn61 = Selector('#content > div > button');
        this.removeBtn62 = Selector('#elements > button');
        this.removeBtn63 = Selector('#elements > button:nth-child(2)');
        this.removeBtn64 = Selector('#elements > button:nth-child(3)');
        this.removeBtn65 = Selector('#elements > button:nth-child(4)');
        this.removeBtn66 = Selector('#elements > button:nth-child(5)');
        
        // Practica 7
        this.input71 = Selector('#first-name');
        this.input72 = Selector('#last-name');
        this.input73 = Selector('#job-title');
        this.rbtn74 = Selector('#radio-button-1');
        this.rbtn75 = Selector('#radio-button-2');
        this.rbtn76 = Selector('#radio-button-3');
        this.checkbox77 = Selector('#checkbox-1');
        this.checkbox78 = Selector('#checkbox-2');
        this.checkbox79 = Selector('#checkbox-3');
        this.smenu701 = Selector('#select-menu');
        //this.opt702 = Selector('#select-menu > option');
        this.opt702 = Selector('#select-menu > option:nth-child(1)');
        //this.opt703 = Selector('#select-menu > option:nth-child(2)');
        //this.opt704 = Selector('#select-menu > option:nth-child(3)');
        //this.opt705 = Selector('#select-menu > option:nth-child(4)');
        //this.opt706 = Selector('#select-menu > option:nth-child(5)');
        this.date703 = Selector('#datepicker');
        this.btn704 = Selector('body > div > form > div > div:nth-child(15) > a');
        //this.btn704 = Selector('a').withText('Submit');
        this.text705 = Selector('h1').withText('Thanks for submitting your form');
        this.text705 = Selector('body > div > div');

        // Practica 8
        this.link8 = Selector('a').withText('Form Authentication');
        this.input81 = Selector('#username');
        this.input82 = Selector('#password');
        this.btn83 = Selector('#login > button > i');
        this.error84 = Selector('#flash');
        this.btn85 = Selector('#content > div > a > i'),

        // Practica 9
        this.link9 = Selector('a').withText('Key Presses');
        this.text91 = Selector('#result');

        // Pracitca 10
        this.link10 = Selector('a').withText('Context Menu');
        this.hotspot101 = Selector('#hot-spot');
    }
}

export default new Page();