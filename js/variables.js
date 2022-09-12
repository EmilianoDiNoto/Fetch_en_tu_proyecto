const moneda = document.getElementById("txtMoneda");
const monto = document.getElementById("txtMonto");
const btnAceptar = document.getElementById("txtAceptar");
const btnConvertir = document.getElementById("txtConversion");


// He utilizado SweetAlert. Creé una arrow function donde se encuentra las propiedades de la alerta. La unica utilidad que le pude encontrar para que sea coherente con mi proyecto fue que se dispare cuando se realice una conversion exitosamente o cuando faltan datos por completar.
const toastAlert = (mensaje, icono, posicion) => {
    Swal.fire({
        toast: true,
        position: posicion,
        text: 'Por favor, asegurese de completar todos los campos',
        icon: icono,
        showConfirmButton: false,
        timer: 3000,
        text: mensaje,
    })
}
    
btnAceptar.addEventListener("click", CapturarDatos);
btnConvertir.addEventListener("click", verEstadisticas);

function CapturarDatos() {

    if (monto.value != "" && moneda.value != "")
    {
    const eleccion = moneda.value.toLowerCase();
    const ingreso = new divisas(monto.value, eleccion);
    ingreso.conversion();

    conversiones.push(new divisas(monto.value, moneda.value));
    localStorage.setItem("conversiones", JSON.stringify(conversiones));

    moneda.value = "";
    monto.value = "";

    moneda.focus();

    console.log(recuperarDatosdeLS());
// Aquí utilicé la alerta para que se disparé cuando la conversión fue exitosa.
    toastAlert("Conversión completada exitosamente", "success", "top-end");
    }
    else
    {
// Aquí utilicé una alerta para que se dispare cuando los campos estan incompletos y no pueda hacerse la conversion.
    toastAlert("Por favor, asegurese de completar todos los campos", "warning", "top-start");
    }
}

function recuperarDatosdeLS() 
{
    if (localStorage.conversiones)
    {
        const converGuardados =JSON.parse(localStorage.getItem("conversiones"))
        console.table(converGuardados);
    }
}


function verEstadisticas() {
    const converMon = document.getElementById("lblConversion");
    const valorfinal = montoFinal;
    converMon.innerText = valorfinal;

}

// Gracias nuevamente por la paciencia.