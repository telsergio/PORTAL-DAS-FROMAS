

function calcularArea() {
    // Recupere os valores dos lados e ângulo inseridos pelo usuário
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);
    var lado4 = parseFloat(document.getElementById("lado4").value);
    var lado5 = parseFloat(document.getElementById("lado5").value);
    var angulo = parseFloat(document.getElementById("angulo").value);

    // Verifique se os valores são válidos (não nulos e positivos)
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || isNaN(lado4) || isNaN(lado5) || isNaN(angulo) ||
        lado1 <= 0 || lado2 <= 0 || lado3 <= 0 || lado4 <= 0 || lado5 <= 0 || angulo <= 0) {
        alert("Por favor, insira valores válidos para os lados e o ângulo.");
        return;
    }

    // Converta o ângulo para radianos
    var anguloRadianos = angulo * (Math.PI / 180);

    // Calcule a área do pentágono irregular usando a fórmula apropriada
    var area = (1/4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * (lado1 ** 2) / Math.tan(anguloRadianos);

    document.getElementById("resultado").innerHTML = "A área do pentágono irregular é: " + area.toFixed(2);
}

