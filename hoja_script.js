function calcularPropina() 
{
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const porcentaje = parseFloat(document.getElementById("propina").value);

    const propina = (subtotal * porcentaje) / 100;
    const total = subtotal + propina;
    document.getElementById("resultado").innerHTML = 
        `<p>Propina: $${propina.toFixed(2)}</p>
         <p>Total a pagar: $${total.toFixed(2)}</p>`;
}