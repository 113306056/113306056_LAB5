let rowCount = 0;

function submitGrades() {
    const mathInput = document.getElementById('mathGrade');
    const englishInput = document.getElementById('englishGrade');

    const mathGrade = parseFloat(mathInput.value);
    const englishGrade = parseFloat(englishInput.value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid grades for both Math and English.');
        return;
    }

    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    const tableBody = document.getElementById('gradesTableBody');

    rowCount++;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    `;

    tableBody.appendChild(newRow);

    mathInput.value = '';
    englishInput.value = '';

    updateAverages();
}

function updateAverages() {
    const rows = document.querySelectorAll('#gradesTableBody tr');
    let totalMath = 0;
    let totalEnglish = 0;
    let count = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const math = parseFloat(cells[1].textContent);
        const english = parseFloat(cells[2].textContent);

        totalMath += math;
        totalEnglish += english;
        count++;
    });

    const mathAverage = (totalMath / count).toFixed(2);
    const englishAverage = (totalEnglish / count).toFixed(2);
    const overallAverage = ((totalMath + totalEnglish) / (count * 2)).toFixed(2);

    document.getElementById('mathAverage').textContent = count > 0 ? mathAverage : '-';
    document.getElementById('englishAverage').textContent = count > 0 ? englishAverage : '-';
    document.getElementById('overallAverage').textContent = count > 0 ? overallAverage : '-';
}