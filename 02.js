1 /**
2 * Nombre: ancho x alto
3 * 8K: 7680 x 4320
4 * 4K: 3840 X 2160
5 * WQHD: 2560 x 1440
6 * FHD: 1920 x 1080
7 * HD: 1280 x 720
8 */

function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return "8k";
    } else if (ancho >= 3840 && alto >= 2160){
        return "4K";
    } else if (ancho >= 2560 && alto >= 1440){
        return "WQHD";
    } else if (ancho >= 1920 && alto >= 1080){
        return "FHD";
    } else if (ancho >= 1280 && alto >= 720){
        return "HD";
    } else {
        return false;
    }
}

let nombre = nombreResolucion(7680, 4320);
console.log(nombre);

let nombre2 = nombreResolucion(3840, 2160);
console.log(nombre2);
