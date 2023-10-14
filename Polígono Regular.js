
        function calcularArea() {
            var lado = parseFloat(document.getElementById("lado").value);
            var altura = parseFloat(document.getElementById("altura").value);

            if (isNaN(lado) || isNaN(altura)) {
                alert("Por favor, insira valores válidos para o lado e a altura.");
                return;
            }

            var area = lado * altura;

            document.getElementById("resultado").innerHTML = "A área do polígono regular é: " + area.toFixed(2);
        }
 