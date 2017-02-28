import ExampleAppService from './services/example.service';
declare var Modernizr;
console.log("Modernizer from CDN... flexbox support ?  " +  Modernizr.flexbox);
console.log(ExampleAppService.hello());
