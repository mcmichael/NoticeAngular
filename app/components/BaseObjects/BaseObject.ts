import {Component} from 'angular2/core';
import {person} from '/app';

/*Base object*/

export class BaseObject{
    constructor(
        public id: number,
        public title: string,
        public date: Date,
        public hour: Date

        /*People - Array of persons*/ 
        

    ){}
}