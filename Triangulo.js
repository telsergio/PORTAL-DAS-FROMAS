
function calcularArea() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor, insira valores válidos para a base e a altura.");
        return;
    }

    var area = (base * altura) / 2;

    document.getElementById("resultado").innerHTML = "A área do triângulo é: " + area.toFixed(2);
}
