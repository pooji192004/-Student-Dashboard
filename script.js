// STUDENT DATA
const students = [
  {
    id: 1,
    name: "Poojitha",
    marks: { math: 85, science: 90, english: 78 }
  },
  {
    id: 2,
    name: "Rahul",
    marks: { math: 75, science: 80, english: 70 }
  },
  {
    id: 3,
    name: "Anjali",
    marks: { math: 92, science: 88, english: 84 }
  }
];

// RENDER TABLE
function renderTable(data) {
    const table = document.getElementById("studentTable");

    table.innerHTML = data.map(s => `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.marks.math}</td>
            <td>${s.marks.science}</td>
            <td>${s.marks.english}</td>
        </tr>
    `).join('');
}

// CHART
function loadChart(student) {
    const ctx = document.getElementById("marksChart");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Math", "Science", "English"],
            datasets: [{
                label: "Marks",
                data: [
                    student.marks.math,
                    student.marks.science,
                    student.marks.english
                ]
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });
}

// SEARCH
document.getElementById("searchInput").addEventListener("input", function () {
    const value = this.value.toLowerCase();

    const filtered = students.filter(s =>
        s.name.toLowerCase().includes(value)
    );

    renderTable(filtered);
});

// INIT
renderTable(students);
loadChart(students[0]);  // default first student