import '../../node_modules/angular/angular-csp.css';
import '../../node_modules/normalize.css/normalize.css';
import * as angular from 'angular';
import * as moment from 'moment';
import IController = angular.IController;
import IComponentOptions = angular.IComponentOptions;


class AppController implements IController {
    constructor($scope: angular.IScope, $timeout) {
        "ngInject";

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


angular.module('app', [])
    .component('app', componentOptions);

