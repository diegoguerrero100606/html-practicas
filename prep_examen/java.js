console.log("El archivo JavaScript está funcionando");
console.log(document.getElementById("DiaN"));
console.log(document.getElementById("MesN"));
console.log(document.getElementById("estado"));

function menuformulario(idSelect,inicio,fin){

	const select = document.getElementById(idSelect);
	for (let i = inicio; i <= fin; i++) {
		const opcion = document.createElement('option');
		opcion.value = i;
		opcion.textContent = i;
		select.appendChild(opcion);
		}
	}
menuformulario('DiaN',1,31);
menuformulario('MesN',1,12);
menuformulario('AnoN', 1920,2026);

const estados = {
    "Aguascalientes": "AS",
    "Baja California": "BC",
    "Baja California Sur": "BS",
    "Campeche": "CC",
    "Chiapas": "CS",
    "Chihuahua": "CH",
    "Ciudad de México": "DF",
    "Coahuila": "CL",
    "Colima": "CM",
    "Durango": "DG",
    "Guanajuato": "GT",
    "Guerrero": "GR",
    "Hidalgo": "HG",
    "Jalisco": "JC",
    "Estado de México": "MC",
    "Michoacán": "MN",
    "Morelos": "MS",
    "Nayarit": "NT",
    "Nuevo León": "NL",
    "Oaxaca": "OC",
    "Puebla": "PL",
    "Querétaro": "QT",
    "Quintana Roo": "QR",
    "San Luis Potosí": "SP",
    "Sinaloa": "SL",
    "Sonora": "SR",
    "Tabasco": "TC",
    "Tamaulipas": "TS",
    "Tlaxcala": "TL",
    "Veracruz": "VZ",
    "Yucatán": "YN",
    "Zacatecas": "ZS",
    "Nacido en el extranjero": "NE"
};
const selectEstado = document.getElementById("estado");

// Generar las opciones del menú
Object.entries(estados).forEach(([nombre, codigo]) => {
    const opcion = document.createElement("option");

    opcion.value = codigo;
    opcion.textContent = nombre;

    selectEstado.appendChild(opcion);
});

const enviarBoton = document.querySelector(".enviar");
enviarBoton.addEventListener("click",calcularCurp);

function limpiarTexto(texto) {
    return texto
        .trim()
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}
function primeraVocalInterna(texto) {
    const letras = texto.slice(1);
    const coincidencia = letras.match(/[AEIOU]/);

    return coincidencia ? coincidencia[0] : "X";
}
function primeraConsonanteInterna(texto) {
    const letras = texto.slice(1);
    const coincidencia = letras.match(/[B-DF-HJ-NP-TV-Z]/);

    return coincidencia ? coincidencia[0] : "X";
}
function calcularCurp() {
    // 1. Leer los campos del HTML
    const nombre = limpiarTexto(
        document.getElementById("Nombre").value
    );

    const apellidoP = limpiarTexto(
        document.getElementById("ApellidoP").value
    );

    const apellidoM = limpiarTexto(
        document.getElementById("ApellidoM").value
    );

    const dia = document.getElementById("DiaN").value;
    const mes = document.getElementById("MesN").value;
    const anio = document.getElementById("AnoN").value;
    const sexo = document.getElementById("Sexo").value;
    const estado = document.getElementById("estado").value;

    // 2. Validar que se hayan escrito los nombres
    if (!nombre || !apellidoP || !apellidoM) {
        alert("Completa el nombre y los apellidos");
        return;
    }

    // 3. Obtener las primeras letras
    const letra1 = apellidoP[0];
    const letra2 = primeraVocalInterna(apellidoP);
    const letra3 = apellidoM[0];
    const letra4 = nombre[0];

    // 4. Preparar la fecha
    const anioCorto = anio.slice(-2);
    const mesFormato = mes.padStart(2, "0");
    const diaFormato = dia.padStart(2, "0");

    // 5. Obtener las consonantes internas
    const consonanteP = primeraConsonanteInterna(apellidoP);
    const consonanteM = primeraConsonanteInterna(apellidoM);
    const consonanteN = primeraConsonanteInterna(nombre);

    // 6. Construir la parte inicial
    const curpBase =
        letra1 +
        letra2 +
        letra3 +
        letra4 +
        anioCorto +
        mesFormato +
        diaFormato +
        sexo +
        estado +
        consonanteP +
        consonanteM +
        consonanteN;

    console.log("Base provisional:", curpBase);

    document.getElementById("curpResultado").textContent = curpBase;
}

