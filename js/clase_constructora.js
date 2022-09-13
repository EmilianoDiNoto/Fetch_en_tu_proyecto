let montoFinal = 0;
let i = 0;
let resultado = 0;


class divisas {
    constructor(monto, moneda) {
        this.monto = monto
        this.moneda = moneda
    }
    conversion() {
        if (this.moneda == "dolar" && this.monto >= monedas.dolar) {
            montoFinal = this.monto / monedas.dolar;
            resultado = montoFinal.value;
            toastAlert("Conversión completada exitosamente", "success", "top-end");
        }
        else if (this.moneda == "euro" && this.monto >= monedas.euro) {
            montoFinal = this.monto / monedas.euro;
            resultado = montoFinal.value;
            toastAlert("Conversión completada exitosamente", "success", "top-end");
        }
        else if (this.moneda == "libra" && this.monto >= monedas.libra) {
            montoFinal = this.monto / monedas.libra;
            resultado = montoFinal.value;
            toastAlert("Conversión completada exitosamente", "success", "top-end");
        }
        else if (this.monto < monedas.dolar || this.monto < monedas.euro || this.monto < monedas.libra) {
            toastAlert("El monto ingresado no fue suficiente para realizar la conversion", "warning", "top-start")
        }
    }
}