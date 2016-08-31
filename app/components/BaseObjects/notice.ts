import {Component,Optional} from 'angular2/core';
import {BaseObject} from './BaseObject'
import {Person} from './Person';

/*
Class notification - 23 August 2016
*/
export class Notice extends BaseObject{
    
    /* Initialize empty arrays and empty values with @Optional*/

    constructor(dateNotice:Date, hourNotice:Date, idNotice:number, placeNotice:string,titleNotice:string, @Optional() peopleMeeting: Person[], @Optional() peopleSender: Person, @Optional() peopleReceiver: Person[], @Optional() time: number)
    {
        super(dateNotice,hourNotice,idNotice,placeNotice,titleNotice,peopleMeeting,peopleSender,peopleReceiver,time);
    }
    

}