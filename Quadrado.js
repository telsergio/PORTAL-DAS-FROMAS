
function calcularArea() {
    var lado = parseFloat(document.getElementById("lado").value);

    if (isNaN(lado)) {
        alert("Por favor, insira um valor válido para o lado do quadrado.");
        return;
    }

    var area = lado * lado;

    document.getElementById("resultado").innerHTML = "A área do quadrado é: " + area.toFixed(2);
}
