
function calcularArea() {
    var raio = parseFloat(document.getElementById("raio").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(raio) || isNaN(altura)) {
        alert("Por favor, insira valores válidos para o raio e a altura do cilindro.");
        return;
    }

    var area = 2 * Math.PI * raio * altura;

    document.getElementById("resultado").innerHTML = "A área da superfície lateral do cilindro é: " + area.toFixed(2);
}
