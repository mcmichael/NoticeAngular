import {Component} from 'angular2/core';
import {Person} from './Person';

/*Base object*/

export class BaseObject{
    constructor(
        public date: Date,
        public hour: Date,
        public id: number,

        public place: String,
        /*People - Array of persons*/ 
        public people : Person[],
        public title: string

    ){}
}