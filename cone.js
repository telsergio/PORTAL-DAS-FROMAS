
function calcularArea() {
    var raio = parseFloat(document.getElementById("raio").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(raio) || isNaN(altura)) {
        alert("Por favor, insira valores válidos para o raio e a altura do cone.");
        return;
    }

    var slantHeight = Math.sqrt(raio * raio + altura * altura);
    var area = Math.PI * raio * slantHeight;

    document.getElementById("resultado").innerHTML = "A área da superfície lateral do cone é: " + area.toFixed(2);
}
