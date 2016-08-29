import {Component} from 'angular2/core';
import {Person} from './Person';

/*Base object*/

export class BaseObject{
    constructor(
        public date: Date,
        /* Duration */
        public time: Date,

        public hour: Date,
        public id: number,

        public place: String,
        /*People - Array of persons*/ 
        public peopleMeeting : Person[],

        public personSender: Person,
        public peopleReceiver: Person[],
        public title: string

    ){}
}