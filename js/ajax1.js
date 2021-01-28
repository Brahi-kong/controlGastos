// ver forma de meter variable global para consultar json solo una vez 
// cada vez que se lo requiera

document.querySelector('#botonInv').addEventListener('click', traerDatos());

function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/json/inventario.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            // console.log(datos);
            let res = document.querySelector('#respuesta');
            res.innerHTML = '';

            for (let item of datos) {
                // console.log(item);
                res.innerHTML += ` 
                <tr>
                    <td>${item.nombre_Producto}</td>
                    <td>${item.precio_Compra}</td>
                    <td>${item.precio_Venta}</td>
                    <td>${item.ganancia}</td>
                <tr>
                ` 
            }
        }
    }
}

function calcular (params) {
    // Boton que calcula la ganancia total (suma todas las ganancias de los productos agregados a la nueva lista)
    console.log('Probando boton Calcular');
}

function refresh (params) {
    // Boton para eliminar los array de objetos creados. Para poder empezar un nuevo calculo.
    console.log('Probando boton Reiniciar APP');
}

