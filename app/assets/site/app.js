/* styles */
import './scss/app.scss';

/* js */
const $ = require('jquery');
// это "модифицирует" модуль jquery: добавляя к нему поведение
// модуль bootstrap ничего не экспортирует/возвращает
global.bootstrap = require('bootstrap');

import bsCustomFileInput from 'bs-custom-file-input';
import {logPlugin} from "@babel/preset-env/lib/debug";

bsCustomFileInput.init();

import 'owl.carousel';

require('./js/eshop');