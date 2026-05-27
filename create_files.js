const fs = require('fs');
const path = require('path');

const dir = process.cwd();

const navBar = `
        <nav class="solution-nav">
            <a href="index.html" class="btn btn-outline-primary nav-home">🏠 Menú Principal</a>
            <a href="solucion1.html" class="btn btn-primary nav-circle">1</a>
            <a href="solucion2.html" class="btn btn-primary nav-circle">2</a>
            <a href="solucion3.html" class="btn btn-primary nav-circle">3</a>
            <a href="solucion4.html" class="btn btn-primary nav-circle">4</a>
            <a href="solucion5.html" class="btn btn-primary nav-circle">5</a>
            <a href="solucion6.html" class="btn btn-primary nav-circle">6</a>
            <a href="solucion7.html" class="btn btn-primary nav-circle">7</a>
            <a href="solucion8.html" class="btn btn-primary nav-circle">8</a>
            <a href="solucion9.html" class="btn btn-primary nav-circle">9</a>
            <a href="solucion10.html" class="btn btn-primary nav-circle">10</a>
        </nav>
`;

const problems = [
    {
        title: "1. Promedio de tres números",
        desc: "Calcula el promedio de tres números ingresados.",
        html: `
            <input type="number" id="num1" class="form-control mb-2" placeholder="Número 1">
            <input type="number" id="num2" class="form-control mb-2" placeholder="Número 2">
            <input type="number" id="num3" class="form-control mb-2" placeholder="Número 3">
            <button class="btn btn-primary mt-2" onclick="calcularPromedio()">Calcular Promedio</button>
            <p id="res1" class="mt-3" style="font-weight: bold; color: var(--text-primary);"></p>
        `,
        script: `
            function calcularPromedio() {
                let n1 = parseFloat(document.getElementById('num1').value) || 0;
                let n2 = parseFloat(document.getElementById('num2').value) || 0;
                let n3 = parseFloat(document.getElementById('num3').value) || 0;
                let prom = (n1 + n2 + n3) / 3;
                document.getElementById('res1').innerText = "El promedio es: " + prom.toFixed(2);
            }
        `
    },
    {
        title: "2. Área de un triángulo",
        desc: "Calcula el área ingresando la base y la altura.",
        html: `
            <input type="number" id="base" class="form-control mb-2" placeholder="Base">
            <input type="number" id="altura" class="form-control mb-2" placeholder="Altura">
            <button class="btn btn-primary mt-2" onclick="calcularArea()">Calcular Área</button>
            <p id="res2" class="mt-3" style="font-weight: bold; color: var(--text-primary);"></p>
        `,
        script: `
            function calcularArea() {
                let b = parseFloat(document.getElementById('base').value) || 0;
                let a = parseFloat(document.getElementById('altura').value) || 0;
                let area = (b * a) / 2;
                document.getElementById('res2').innerText = "El área es: " + area;
            }
        `
    },
    {
        title: "3. Par o Impar",
        desc: "Determina si un número es par o impar.",
        html: `
            <input type="number" id="num" class="form-control mb-2" placeholder="Ingresa un número">
            <button class="btn btn-primary mt-2" onclick="verificarPar()">Verificar</button>
            <p id="res3" class="mt-3" style="font-weight: bold; color: var(--text-primary);"></p>
        `,
        script: `
            function verificarPar() {
                let n = parseInt(document.getElementById('num').value) || 0;
                if (n % 2 === 0) {
                    document.getElementById('res3').innerText = "El número " + n + " es Par.";
                } else {
                    document.getElementById('res3').innerText = "El número " + n + " es Impar.";
                }
            }
        `
    },
    {
        title: "4. Mayor y Menor de tres números",
        desc: "Encuentra el mayor y el menor de tres números ingresados.",
        html: `
            <input type="number" id="n1" class="form-control mb-2" placeholder="Número 1">
            <input type="number" id="n2" class="form-control mb-2" placeholder="Número 2">
            <input type="number" id="n3" class="form-control mb-2" placeholder="Número 3">
            <button class="btn btn-primary mt-2" onclick="mayorMenor()">Calcular</button>
            <p id="res4" class="mt-3" style="font-weight: bold; color: var(--text-primary);"></p>
        `,
        script: `
            function mayorMenor() {
                let a = parseFloat(document.getElementById('n1').value) || 0;
                let b = parseFloat(document.getElementById('n2').value) || 0;
                let c = parseFloat(document.getElementById('n3').value) || 0;
                let mayor = Math.max(a, b, c);
                let menor = Math.min(a, b, c);
                document.getElementById('res4').innerText = "Mayor: " + mayor + " | Menor: " + menor;
            }
        `
    },
    {
        title: "5. Elevar número a potencia",
        desc: "Eleva un número a la potencia ingresada.",
        html: `
            <input type="number" id="basePot" class="form-control mb-2" placeholder="Número (Base)">
            <input type="number" id="exp" class="form-control mb-2" placeholder="Potencia (Exponente)">
            <button class="btn btn-primary mt-2" onclick="calcularPotencia()">Calcular Potencia</button>
            <p id="res5" class="mt-3" style="font-weight: bold; color: var(--text-primary);"></p>
        `,
        script: `
            function calcularPotencia() {
                let b = parseFloat(document.getElementById('basePot').value) || 0;
                let e = parseFloat(document.getElementById('exp').value) || 0;
                let res = Math.pow(b, e);
                document.getElementById('res5').innerText = b + " elevado a " + e + " es: " + res;
            }
        `
    },
    {
        title: "6. Mostrar texto invertido",
        desc: "Muestra de forma inversa un texto ingresado.",
        html: `
            <input type="text" id="texto" class="form-control mb-2" placeholder="Ingresa un texto">
            <button class="btn btn-primary mt-2" onclick="invertirTexto()">Invertir</button>
            <p id="res6" class="mt-3" style="font-weight: bold; color: var(--text-primary);"></p>
        `,
        script: `
            function invertirTexto() {
                let txt = document.getElementById('texto').value;
                let inverso = txt.split('').reverse().join('');
                document.getElementById('res6').innerText = "Texto inverso: " + inverso;
            }
        `
    },
    {
        title: "7. Factorial de un número",
        desc: "Calcula el factorial de un número entero positivo.",
        html: `
            <input type="number" id="numFact" class="form-control mb-2" placeholder="Ingresa un número" min="0">
            <button class="btn btn-primary mt-2" onclick="calcularFactorial()">Calcular Factorial</button>
            <p id="res7" class="mt-3" style="font-weight: bold; color: var(--text-primary);"></p>
        `,
        script: `
            function calcularFactorial() {
                let n = parseInt(document.getElementById('numFact').value) || 0;
                if (n < 0) {
                    document.getElementById('res7').innerText = "El factorial no está definido para números negativos.";
                    return;
                }
                let fact = 1;
                for(let i = 1; i <= n; i++) {
                    fact *= i;
                }
                document.getElementById('res7').innerText = "El factorial de " + n + " es: " + fact;
            }
        `
    },
    {
        title: "8. Número Perfecto",
        desc: "Indica si un valor es un número perfecto.",
        html: `
            <input type="number" id="numPerf" class="form-control mb-2" placeholder="Ingresa un número" min="1">
            <button class="btn btn-primary mt-2" onclick="verificarPerfecto()">Verificar</button>
            <p id="res8" class="mt-3" style="font-weight: bold; color: var(--text-primary);"></p>
        `,
        script: `
            function verificarPerfecto() {
                let n = parseInt(document.getElementById('numPerf').value) || 0;
                if (n <= 0) {
                    document.getElementById('res8').innerText = "Ingresa un número positivo.";
                    return;
                }
                let suma = 0;
                for(let i = 1; i < n; i++) {
                    if (n % i === 0) suma += i;
                }
                if (suma === n) {
                    document.getElementById('res8').innerText = n + " es un número Perfecto.";
                } else {
                    document.getElementById('res8').innerText = n + " NO es un número Perfecto.";
                }
            }
        `
    },
    {
        title: "9. Número Primo",
        desc: "Verifica si un valor es un número primo.",
        html: `
            <input type="number" id="numPrimo" class="form-control mb-2" placeholder="Ingresa un número" min="1">
            <button class="btn btn-primary mt-2" onclick="verificarPrimo()">Verificar</button>
            <p id="res9" class="mt-3" style="font-weight: bold; color: var(--text-primary);"></p>
        `,
        script: `
            function verificarPrimo() {
                let n = parseInt(document.getElementById('numPrimo').value) || 0;
                if (n <= 1) {
                    document.getElementById('res9').innerText = n + " NO es un número Primo.";
                    return;
                }
                let esPrimo = true;
                for(let i = 2; i <= Math.sqrt(n); i++) {
                    if(n % i === 0) {
                        esPrimo = false;
                        break;
                    }
                }
                if (esPrimo) {
                    document.getElementById('res9').innerText = n + " es un número Primo.";
                } else {
                    document.getElementById('res9').innerText = n + " NO es un número Primo.";
                }
            }
        `
    },
    {
        title: "10. Contar Vocales",
        desc: "Cuenta las vocales existentes en un texto ingresado.",
        html: `
            <input type="text" id="textoVocales" class="form-control mb-2" placeholder="Ingresa un texto">
            <button class="btn btn-primary mt-2" onclick="contarVocales()">Contar Vocales</button>
            <p id="res10" class="mt-3" style="font-weight: bold; color: var(--text-primary);"></p>
        `,
        script: `
            function contarVocales() {
                let txt = document.getElementById('textoVocales').value.toLowerCase();
                let vocales = txt.match(/[aeiouáéíóúü]/gi);
                let cantidad = vocales ? vocales.length : 0;
                document.getElementById('res10').innerText = "Cantidad de vocales: " + cantidad;
            }
        `
    }
];

const template = (id, prob) => `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solución ${id} - ${prob.title}</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="images/icon_animation.png" type="image/x-icon">
</head>
<body class="bg-gradient-page">
    <header>
        <h1>Solución ${id}</h1>
        <p class="solution-subtitle">${prob.title}</p>
    </header>

    <main class="container-practice container-practice-solutions">
        ${navBar}

        <section class="practice-section">
            <div class="solution-card text-center">
                <h3>${prob.title}</h3>
                <p class="solution-desc">${prob.desc}</p>
                <div class="mt-4 text-start">
                    ${prob.html}
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <p>&copy; Nohelia Barillas 2024-097536 - M2RA2-ADHD04</p>
    </footer>

    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/solucion${id}.js"></script>
</body>
</html>`;

for (let i = 0; i < problems.length; i++) {
    const htmlFilename = path.join(dir, `solucion${i+1}.html`);
    fs.writeFileSync(htmlFilename, template(i+1, problems[i]), 'utf8');
    console.log(`Creado ${htmlFilename}`);

    const jsFilename = path.join(dir, 'js', `solucion${i+1}.js`);
    fs.writeFileSync(jsFilename, problems[i].script.trim(), 'utf8');
    console.log(`Creado ${jsFilename}`);
}

// Update index.html
const indexPath = path.join(dir, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

if (!indexHtml.includes('<!-- ENLACES A SOLUCIONES -->')) {
    let enlacesHtml = `
        <!-- ENLACES A SOLUCIONES -->
        <div class="card mt-4" style="margin-bottom: 30px; border-top: 5px solid #007bff;">
            <div class="card-body text-center">
                <h5 class="card-title">Soluciones a Problemas Prácticos (JS)</h5>
                <p class="card-text">Haz clic en cualquiera de los enlaces para ver la solución del problema en JavaScript.</p>
                <div class="d-flex flex-wrap justify-content-center" style="gap: 10px;">
`;
    for(let i=1; i<=10; i++) {
        enlacesHtml += `                    <a href="solucion${i}.html" class="btn btn-outline-primary">Solución ${i}</a>\n`;
    }
    enlacesHtml += `                </div>
            </div>
        </div>
`;

    // Insert right before </main>
    indexHtml = indexHtml.replace('</main>', enlacesHtml + '\n    </main>');
    fs.writeFileSync(indexPath, indexHtml, 'utf8');
    console.log('index.html actualizado');
}
