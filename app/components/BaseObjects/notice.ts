import {Component} from 'angular2/core';
import {BaseObject} from './BaseObject'

/*
Class notification - 23 August 2016
*/
export class Notice{


    constructor(
        public id: number,
        public message: string,
        public dateMessage: Date,
        public statutMessage: number
    ){}

}