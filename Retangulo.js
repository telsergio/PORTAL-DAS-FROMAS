
function calcularArea() {
    var largura = parseFloat(document.getElementById("largura").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(largura) || isNaN(altura)) {
        alert("Por favor, insira valores válidos para a largura e a altura.");
        return;
    }

    var area = largura * altura;

    document.getElementById("resultado").innerHTML = "A área do retângulo é: " + area.toFixed(2);
}
