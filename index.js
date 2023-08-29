//creamos laberinto de 5x5
var laberinto0 = [
	["S", ".", ".", ".", "."],
	["#", ".", ".", "#", "#"],
	["#", ".", ".", ".", "#"],
	["#", "#", "#", ".", "#"],
	["#", ".", ".", ".", "G"],
];

//creamos laberinto de 6x6
var laberinto1 = [
	["S", "#", "#", ".", ".", "."],
	[".", ".", "#", "#", ".", "#"],
	["#", ".", ".", ".", ".", "#"],
	["#", ".", "#", "#", ".", "#"],
	["#", ".", ".", ".", "#", "#"],
	["#", "#", "#", ".", ".", "G"],
];
// "S" para indicar la salida
// "#" para indicar obstaculo
// "." para indicar el camino libre
// "G" para indicar la meta

function findPath(laberinto0, x, y) {
	//nos preguntamos si nos encontramos fuera del mapa o si nos encontramos en un obstaculo
	if (x < 0 || y < 0 || x >= laberinto0.length || y >= laberinto0[0].length || laberinto0[x][y] === "#" || laberinto0[x][y] === "X") {
		return false;
	}

	//nos preguntamos si nos encontramos en la meta
	if (laberinto0[x][y] === "G" || (x === 5 && y === 5)) {
		return true;
	}

	// marcamos la casilla como posible solucion
	laberinto0[x][y] = "X";

	// movimiento del personaje
	if (
		findPath(laberinto0, x - 1, y) || //nos movemos al oeste
		findPath(laberinto0, x, y + 1) || //nos movemos al sur
		findPath(laberinto0, x + 1, y) || //nos movemos al este
		findPath(laberinto0, x, y - 1) //nos movemos al norte
	) {
		return true;    
	}

	// desmarcamos la casilla
	laberinto0[x][y] = ".";

	return false;
}

// llamamos a la funcion
findPath(laberinto0, 0, 0);

// imprimimos el laberinto realizado
console.log(laberinto0);
