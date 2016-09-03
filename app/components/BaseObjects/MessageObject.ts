import {Component} from 'angular2/core';
import {Person} from './Person';
import {UUID} from 'angular2-uuid';

/* Base class for messages objects August 02 */

export class MessageObject{

    private idMessage:UUID;
    private titleMessage:string;
    private textMessage:string;
    private dateMessage:Date = new Date();
    
    private placeMessage:string;

    /*People - Array of persons or sender messages*/ 
    private personEmitter: Person;//Person that create a Notice or a message
    private peopleReceiver: Person[];//Receivers of a message or an invitation meeting
    private peopleMeeting : Person[]//People in meeting

     /* Duration */
     private dateStartMeeting:Date;
     private dateEndMeeting:Date

    constructor(){

    }



}