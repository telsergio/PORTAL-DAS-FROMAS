
        function calcularArea() {
            var areaBase = parseFloat(document.getElementById("areaBase").value);
            var altura = parseFloat(document.getElementById("altura").value);

            if (isNaN(areaBase) || isNaN(altura)) {
                alert("Por favor, insira valores válidos para a área da base e a altura do prisma.");
                return;
            }

            var area = 2 * areaBase + (altura * (Math.sqrt(areaBase)));

            document.getElementById("resultado").innerHTML = "A área do prisma é: " + area.toFixed(2);
        }
 