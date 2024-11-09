
function processInput(value) {
    const processedValue = value.toUpperCase(); 
    return processedValue;
}

function displayResult(result) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `Resultado procesado: <strong>${result}</strong>`;
}
function storeResult(value) {
    const results = JSON.parse(localStorage.getItem('results')) || [];
    results.push(value);
    localStorage.setItem('results', JSON.stringify(results));
}

function showStoredResults() {
    const results = JSON.parse(localStorage.getItem('results')) || [];
    const resultContainer = document.getElementById('resultContainer');
    
    if (results.length > 0) {
        resultContainer.innerHTML += '<h3>Resultados almacenados:</h3><ul>';
        results.forEach(result => {
            resultContainer.innerHTML += `<li>${result}</li>`;
        });
        resultContainer.innerHTML += '</ul>';
    }
}
document.getElementById('processButton').addEventListener('click', () => {
    const inputValue = document.getElementById('inputValue').value;
    if (inputValue) {
        const processedValue = processInput(inputValue);
        displayResult(processedValue);
        storeResult(processedValue);
        document.getElementById('inputValue').value = ''; 
    } else {
        displayResult('Por favor, ingresa un valor.');
    }
});

window.onload = showStoredResults;