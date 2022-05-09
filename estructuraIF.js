var numeroIngresado = prompt("ingrese un número", "0");

if (numeroIngresado == 3 ){
    document.write(`
    <h2>Es correcto! </h2>
    `);
}else{ //caso por defecto
    document.write(`
    <h2>No es correcto </h2>
    `);
    
}