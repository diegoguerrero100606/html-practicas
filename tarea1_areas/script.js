function mostrarFormulario(figura) {
    // Ocultar formularios
    document.getElementById("form-cuadrado").style.display = "none";
    document.getElementById("form-rectangulo").style.display = "none";
    document.getElementById("form-triangulo").style.display = "none";
    document.getElementById("form-circulo").style.display = "none";
    document.getElementById("form-trapecio").style.display = "none";

    // Quitar la selección de todas las figuras
    const figuras = document.querySelectorAll(".figura");
    //para mostrar que fue seleccionada, un ligero resaltado en comparacion de las
    //demas opciones
    figuras.forEach(function(elemento) 
    { 
        elemento.classList.remove("seleccionada");
    });

    // Mostrar formulario seleccionado
    if (figura === "cuadrado") {
        document.getElementById("form-cuadrado").style.display = "block";
        figuras[0].classList.add("seleccionada");
    }  
    else if (figura === "rectangulo") {
        document.getElementById("form-rectangulo").style.display = "block";
        figuras[1].classList.add("seleccionada");
    }
     else if (figura === "triangulo") {
        document.getElementById("form-triangulo").style.display = "block";
        figuras[2].classList.add("seleccionada");
    }
     else if (figura === "circulo") {
        document.getElementById("form-circulo").style.display = "block";
        figuras[3].classList.add("seleccionada");
    }
     else if (figura === "trapecio") {
        document.getElementById("form-trapecio").style.display = "block";
        figuras[4].classList.add("seleccionada");
    }
    //Borra el resultado anterior
    document.getElementById("resultado").innerHTML = "";
}


function calcularArea(tipo, x, y) {

    let area;

    if (tipo === "cuadrado") {
        area = x * y;
    }
    else if (tipo === "rectangulo") {
        area = x * y;
    }
    else if (tipo === "triangulo") {
        area = (x * y) / 2;
    }    
    else if (tipo === "circulo") {
        area = y*x**2 ;
    } 
    return area;
}
function calcularArea2(tipo, x, y, z) {

    let area;

    if (tipo === "trapecio") {
        area = ((x + y)/2)*z;
    }
    return area;
}

function calcularAreaCuadrado() {
    const lado = Number(document.getElementById("lado").value);
    const area = calcularArea("cuadrado", lado, lado);
    document.getElementById("resultado").innerHTML = "El área del cuadrado es: " + area;
}

function calcularAreaRectangulo() {
    const base = Number(document.getElementById("baseRectangulo").value);
    const altura = Number(document.getElementById("alturaRectangulo").value);
    const area = calcularArea("rectangulo", base, altura);
    document.getElementById("resultado").innerHTML = "El área del rectángulo es: " + area;
}
function calcularAreaTriangulo() {
    const base = Number(document.getElementById("baseTriangulo").value);
    const altura = Number(document.getElementById("alturaTriangulo").value);
    const area = calcularArea("triangulo", base, altura);
    document.getElementById("resultado").innerHTML = "El área del triángulo es: " + area;
}
function calcularAreaCirculo() {
    const radio = Number(document.getElementById("radioCirculo").value);
    const area = calcularArea("circulo",radio, pi=3.1416 );
    document.getElementById("resultado").innerHTML = "El área del circulo es: " + area;
}
function calcularAreaTrapecio() {
    const baseM = Number(document.getElementById("baseMTrapecio").value);
    const basem = Number(document.getElementById("basemTrapecio").value);
    const altura = Number(document.getElementById("alturaTrapecio").value);    
    const area = calcularArea2("trapecio",baseM,basem,altura );
    document.getElementById("resultado").innerHTML = "El área del circulo es: " + area;
}
