/* ========================================================================
 * App.js v1.3.0
 * Copyright 2014 pampersdry
 * ======================================================================== */

'use strict';

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'core'
        ], factory);
    } else {
        factory();
    }
}(function () {

    var APP = {
        // Core init
        // NOTE: init at html element
        // ================================
        init: function () {
            $('html').Core({
                loader: true
            });
        }
    };

    $(function () {
        // Init template core
        APP.init();
    });
    
}));
let listado = [
    'Mapeo gis',
    'ciencia de datos',
    'computación en la nube',
    'asesoria y consultoria',
    'horario de atención'
];
listado.forEach(item=>{
    console.log(item);
})
console.log('hola desde el main');