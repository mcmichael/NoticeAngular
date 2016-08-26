import {Component} from 'angular2/core';

/* Class utilisateur - 24 August 2016 */

export class User{

    constructor(
        public idUser: number,
        public nickUser: string,
        public nameUSer: string,
        public lastName: string
    ){}
}