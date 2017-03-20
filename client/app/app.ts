import '../../node_modules/angular/angular-csp.css';
import '../../node_modules/normalize.css/normalize.css';

import * as angular from 'angular';
import 'jquery/dist/jquery.slim';
import _forEach from "lodash-es/forEach";

import ExampleAppService from './services/example.service';

import * as moment from 'moment';

declare var Modernizr;

import IController = angular.IController;

import IComponentOptions = angular.IComponentOptions;

_forEach([1, 2], x => {
    console.log(x);
});

console.log("Modernizer from CDN... flexbox support ?  " + Modernizr.flexbox);
console.log(ExampleAppService.hello());
// loaded from CDN see external-libraries.conf.js
console.log(moment.now());

class AppController implements IController {
    constructor($scope: angular.IScope, $timeout) {
    }

    $postLink() {
        // loaded from CDN see external-libraries.conf.js
        console.log(moment.now());
    };
}

let componentOptions: IComponentOptions = {
    template: '<div>Test component</div>',
    controller: AppController,
    controllerAs: 'vm'
};

AppController.$inject = ['$scope', '$timeout'];


angular.module('app', [])
    .component('app', componentOptions);
