import {Component} from 'angular2/core';
import {Person} from './Person';
/* Class utilisateur - 24 August 2016 */

export class SuperHero{

    personHero : Person;
    
    constructor(person : Person)
    {
        this.personHero = person;
    }
}