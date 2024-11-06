function solveSimplex() {
    // Recoger datos del formulario
    const objX = parseFloat(document.getElementById("objX").value);
    const objY = parseFloat(document.getElementById("objY").value);
    const restric1X = parseFloat(document.getElementById("restric1X").value);
    const restric1Y = parseFloat(document.getElementById("restric1Y").value);
    const rhs1 = parseFloat(document.getElementById("rhs1").value);
    const restric2X = parseFloat(document.getElementById("restric2X").value);
    const restric2Y = parseFloat(document.getElementById("restric2Y").value);
    const rhs2 = parseFloat(document.getElementById("rhs2").value);

    // Matriz de restricciones
    const A = [
        [restric1X, restric1Y],
        [restric2X, restric2Y]
    ];
    const b = [rhs1, rhs2];
    const c = [-objX, -objY]; // Invertir para maximizar

    // Simulación de solución Simplex (esto es solo un ejemplo simplificado)
    let x = 0, y = 0, Z = 0;
    
    // Realiza el cálculo aquí o conecta con una librería más completa
    // Aquí, un cálculo básico de prueba para ejemplo:
    x = rhs1 / restric1X; 
    y = (rhs2 - (restric2X * x)) / restric2Y;
    Z = objX * x + objY * y;

    // Mostrar el resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Valor óptimo de Z= ${Z.toFixed(2)}</p>
        <p>Valor óptimo de x= ${x.toFixed(2)}</p>
        <p>Valor óptimo de y= ${y.toFixed(2)}</p>
    `;
}