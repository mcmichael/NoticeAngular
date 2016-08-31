import {Component} from 'angular2/core';
import {Person} from './Person';

/*Class BaseObject 30 August 2016*/

export class BaseObject{
    constructor(
        public date: Date,
        public hour: Date,
        public id: number,
        public place: String,
        public title: string,
        
        /*People - Array of persons or sender messages*/ 
        public peopleMeeting : Person[],
        public personSender: Person,
        public peopleReceiver: Person[],
         /* Duration */
        public time: number

    ){}
}