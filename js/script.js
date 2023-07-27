// Definir el crucigrama como una matriz bidimensional
const crucigramaData = [
    ['P', 'E', 'R', 'R', 'O'],
    ['A', '', 'L', '', 'A'],
    ['T', 'A', 'Z', 'A', ''],
    ['O', '', 'R', '', ''],
    ['', '', 'A', 'V', 'E'],
  ];
  
  // Función para generar el crucigrama
  function generarCrucigrama() {
    const crucigramaContainer = document.querySelector('.crucigrama');
    
    crucigramaData.forEach((fila) => {
      fila.forEach((letra) => {
        const celda = document.createElement('div');
        celda.classList.add('celda');
  
        if (letra) {
          celda.textContent = letra;
        }
  
        crucigramaContainer.appendChild(celda);
      });
    });
  }
  
  // Llamar a la función para generar el crucigrama
  generarCrucigrama();