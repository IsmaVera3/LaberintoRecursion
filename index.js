/*
//creamos laberinto de 5x5
let laberinto0 = [
    ["S", ".", ".", ".", "."],
    ["#", ".", ".", "#", "#"],
    ["#", ".", ".", ".", "#"],
    ["#", "#", "#", ".", "#"],
    ["#", ".", ".", ".", "G"]
    ];

//creamos laberinto de 6x6
let laberinto1 = [
    ["#", "#", "#", "#", ".", ".", "#"],
    ["S", ".", "#", "#", ".", "#", "#"],
    ["#", ".", ".", ".", ".", ".", "#"],
    ["#", "#", "#", "#", ".", "#", "#"],
    [".", ".", ".", "#", ".", ".", "G"],
    ["#", "#", "#", "#", "#", "#", "#"]
    ];
// "S" para indicar la salida
// "#" para indicar obstaculo
// "." para indicar el camino libre
// "G" para indicar la meta

function juego(run){
    if(run[x] < 0 || run[y] < 0){
        return false
    }
    if(run[x][y] === "G" || (run[x] === 5 && run[y] === 5)){
        return true
    }
    if(run[x][y] === "."){
        return false
    }
    run[x][y] = "+";
    if(run[x][y*-1])
}
*/
function findPath(maze, x, y) {
    // Verificar si estamos fuera del laberinto o en una pared
    if (
        x < 0 ||
        y < 0 ||
        x >= maze.length ||
        y >= maze[0].length ||
        maze[x][y] === "#" ||
        maze[x][y] === "X"
    ) {
        return false;
    }

    // Verificar si hemos llegado a la meta
    if (maze[x][y] === "G") {
        return true;
    }

    // Marcar la casilla como parte del camino de la solución
    maze[x][y] = "X";

    // Intentar moverse en todas las direcciones posibles
    if (
        findPath(maze, x - 1, y) ||
        findPath(maze, x, y + 1) ||
        findPath(maze, x + 1, y) ||
        findPath(maze, x, y - 1)
    ) {
        return true;
    }

    // Desmarcar la casilla si no se encontró un camino válido
    maze[x][y] = ".";

    return false;
}

// Definir el laberinto
var maze = [
    ["S", ".", "#", ".", "."],
    ["#", ".", "#", ".", "#"],
    ["#", ".", ".", ".", "#"],
    ["#", ".", "#", "#", "#"],
    ["#", ".", ".", ".", "G"],
];

// Encontrar un camino en el laberinto
findPath(maze, 0, 0);

// Imprimir el laberinto con la solución
for (var fila = 0; fila < maze.length; fila++) {
    console.log(maze[fila].join(" "));
}
