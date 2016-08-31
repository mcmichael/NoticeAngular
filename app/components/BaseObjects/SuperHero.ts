import {Component} from 'angular2/core';
import {Person} from './Person';
import {Quality} from './Quality';
/* Class utilisateur - 24 August 2016 */

export class SuperHero extends Person{

/*Quality Arrays content the forces to develop on superHero*/
qualitySuperHero: Quality[];

    constructor(id, lastName, name, nick ){
        super(id,lastName,name,nick);
        
    }   
}