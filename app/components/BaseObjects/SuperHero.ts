import {Component} from 'angular2/core';
import {Person} from './Person';
import {Quality} from './Quality';
/* Class utilisateur - 24 August 2016 */

export class SuperHero extends Person{

/*Quality Arrays content the forces to develop on superHero*/
private qualitySuperHero: Quality[];

    constructor(){
        super();
        
    }   
}