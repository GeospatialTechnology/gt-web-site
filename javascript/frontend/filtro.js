let mostrar = false;
let filtrado = document.getElementsByClassName('filtrado')[0];
let txtFiltrado = document.getElementsByClassName('txtFiltrado')[0];
let btnBuscar = document.getElementsByClassName('btnBuscar')[0];
let btnCerrar = document.getElementsByClassName('btnCerrar')[0];
let txtBuscar = document.getElementById('dropdown-form');
let htmlFiltro;
// let listado = [
//     'Mapeo gis',
//     'ciencia de datos',
//     'computación en la nube',
//     'asesoria y consultoria',
//     'horario de atención'
// ];
let listadoEnlaces = [
    { url:'index.html#mapeo', texto: 'Mapeo GIS y herramientas geoespaciales' },
    { url:'index.html#clientes', texto: 'Nuestros clientes' },
    { url:'page-contact.html#contactanos', texto: 'Contáctanos' },
    { url:'page-contact.html#horario', texto: 'Horario de atención' },
    { url:'page-about.html#conocenos', texto: 'Conócenos' },
]
btnBuscar.addEventListener('click',()=>{
    mostrarOcultarBuscar()
});
btnCerrar.addEventListener('click',()=>{
    mostrarOcultarBuscar()
});
function mostrarOcultarBuscar(){
    mostrar = !mostrar;
    htmlFiltro = '';
    console.log('click en buscar: ', mostrar);
    mostrar?filtrado.classList.add('mostrarFiltrado'):filtrado.classList.remove('mostrarFiltrado');
    mostrar?txtBuscar.classList.add('open'):txtBuscar.classList.remove('open');
}
txtFiltrado.addEventListener('input',(evt)=>{
    console.log('el evento: ',txtFiltrado.value);
    let texto = txtFiltrado.value.toUpperCase();
    buscar(texto);
})
function buscar(texto){
    // let filtrado = listado.map((item)=>{
    //     if(item.toUpperCase().indexOf(texto) > -1){
    //         return item;
    //     }
    // });
    // let filtrado = listado.filter((item)=>{
    //     return item.toUpperCase().indexOf(texto);
    // })
    htmlFiltro = '';
    for(let i=0; listadoEnlaces.length > i; i++){
        if(listadoEnlaces[i]['texto'].toUpperCase().indexOf(texto) > -1){
            // let param = document.createElement("li");
            // param.classList.add('list-group-item');
            // console.log(listado[i]);
            // param.appendChild(document.createTextNode(listado[i]));
            // filtrado.appendChild(param);
            // htmlFiltro = htmlFiltro+'<li class="list-group-item">'+listado[i]+'</li>';
            htmlFiltro = htmlFiltro+'<a href="'+listadoEnlaces[i]['url']+'" class="list-group-item">'+listadoEnlaces[i]['texto']+'</a>';
        }
    };
    filtrado.innerHTML = htmlFiltro;
    // listado.forEach(item=>{
    //     if(item.toUpperCase().indexOf(texto) > -1){
    //         console.log(item);
    //         param.appendChild(document.createTextNode(item));
    //     }
    // });
    // console.log('lo filtrado: ',filtrado);
}