const expenses = [];

        function addExpense() {
            const date = document.getElementById('date').value;
            const category = document.getElementById('category').value;
            const amount = parseFloat(document.getElementById('amount').value);
            const note = document.getElementById('note').value;

            if (!date || isNaN(amount)) {
                alert('Please fill in all required fields.');
                return;
            }

            const expense = { date, category, amount, note };
            expenses.push(expense);

            updateTable();
            updateTotal();
        }

        function updateTable() {
            const tbody = document.querySelector('#expense-table tbody');
            tbody.innerHTML = '';

            expenses.forEach(expense => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${expense.date}</td>
                    <td>${expense.category}</td>
                    <td>${expense.amount.toFixed(2)}</td>
                    <td>${expense.note}</td>
                `;
                tbody.appendChild(row);
            });
        }

        function updateTotal() {
            const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
            document.getElementById('total-expenses').textContent = `Total Expenses: ₹${total.toFixed(2)}`;
        }

        function downloadPDF() {
            const doc = new jsPDF();
            doc.setFontSize(16);
            doc.text("Expense Report", 10, 10);

            let y = 20;
            doc.setFontSize(12);
            doc.text("Date", 10, y);
            doc.text("Category", 50, y);
            doc.text("Amount", 100, y);
            doc.text("Note", 140, y);

            y += 10;
            expenses.forEach(expense => {
                doc.text(expense.date, 10, y);
                doc.text(expense.category, 50, y);
                doc.text(`$${expense.amount.toFixed(2)}`, 100, y);
                doc.text(expense.note, 140, y);
                y += 10;
            });

            const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
            doc.setFontSize(14);
            doc.text(`Total Expenses: $${total.toFixed(2)}`, 10, y);
}