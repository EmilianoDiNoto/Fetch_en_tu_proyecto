let monedaUno = document.getElementById('moneda-uno');
let monedaDos = document.getElementById('moneda-dos');
let cantidadUno = document.getElementById('cantidad-uno');
let cantidadDos = document.getElementById('cantidad-dos');
let cambioMoneda = document.getElementById('cambio');
let tazaMoneda = document.getElementById('taza')
// He aquí mi proyecto. He podido avanzar mucho gracias a que encontré una api con valores reales de las distintas monedas de uso corriente. 
// Debo decir que me basé mucho en otros proyectos y espero poder agregarle mi estilo en las proximas semanas para el proyecto final.
// Este trabajo utiliza una api de exchangarateapi y utiliza fetch con algunas promesas como .then 
// Lamentablemente tuve que eliminar las cosas que había agregado de sweetalert ya que no les encontré un buen uso. Pero planeo agregarlo en el proyecto final
// Finalmente, quiero agradecer la paciencia nuevamente, lo aprecio mucho =).
const calculate = async() => {
    const moneda_uno_valor = monedaUno.value;
    const moneda_dos_valor = monedaDos.value;
    await fetch(`https://v6.exchangerate-api.com/v6/759fa54e4c77bd4a322ffb08/latest/${moneda_uno_valor}`)
        .then((resultado) => resultado.json())
        .then((data) => {
            let taza = data.conversion_rates[moneda_dos_valor];
            cambioMoneda.innerText = `1${moneda_uno_valor} = ${taza} ${moneda_dos_valor}`;
            cantidadDos.value = (cantidadUno.value * taza).toFixed(2);
        })
}

monedaUno.addEventListener("change", calculate);
cantidadUno.addEventListener("input", calculate);
monedaDos.addEventListener("change", calculate);
cantidadDos.addEventListener("input", calculate);

taza.addEventListener("click", () => {
    const temp = monedaUno.value;
    monedaUno.value = monedaDos.value;
    monedaDos.value = temp;
    calculate();
});

calculate();