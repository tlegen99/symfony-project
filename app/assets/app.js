//import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';

import 'bootstrap';
import bsCustomFileInput from 'bs-custom-file-input';
import {logPlugin} from "@babel/preset-env/lib/debug";

bsCustomFileInput.init();

console.log('test')

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
