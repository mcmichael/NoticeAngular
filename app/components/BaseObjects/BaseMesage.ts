import {Component} from 'angular2/core';

/*Base object*/

export class BaseObject{
    constructor(
        public id: number,
        public title: string,
        public date: Date,
        public hour: Date
    ){}
}