import jquery from 'jquery';
import popper from 'popper.js';

window.$ = window.jQuery = jquery;
window.Popper = popper;

require('bootstrap');

require('./modules/nav');
require('./modules/phones');