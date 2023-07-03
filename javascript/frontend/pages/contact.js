/* ========================================================================
 * contact.js
 * Page/renders: gh_frontend/page-contact.html
 * Plugins used: gmaps
 * ======================================================================== */

/* global GMaps */

// 'use strict';

// (function (factory) {
//     if (typeof define === 'function' && define.amd) {
//         define([
//             'gmaps'
//         ], factory);
//     } else {
//         factory();
//     }
// }(function () {

//     $(function () {
//         // gmaps - marker
//         // ================================
//         var marker = new GMaps({
//             el: '#gmaps-marker',
//             lat: -12.043333,
//             lng: -77.028333
//         });
//         marker.addMarker({
//             lat: -12.042,
//             lng: -77.028333,
//             title: 'Marker with InfoWindow',
//             infoWindow: {
//                 content: '<p>HTML Content</p>'
//             }
//         });
//     });
// }));

const btnSend = document.getElementById('sendMessage');
const txtNombre = document.getElementById('contact_name');
const txtEmail = document.getElementById('contact_email');
const txtMessage = document.getElementById('contact_message');
btnSend.addEventListener('click', function () {
    if(txtNombre.value!=='' && txtEmail.value!=='' && txtMessage.value!==''){
        window.open('mailto:carlos.vep.work@gmail.com?subject='+txtNombre.value+'&body='+txtMessage.value+' devolver respuesta al correo: '+txtEmail.value);
    }else{
        alert('Todos los campos deben ser llenados.');
    }
});
