// Initialize expenses array from localStorage or empty array
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let totalExpenses = 0;

// Category colors mapping
const categoryColors = {
    food: 'category-food',
    travel: 'category-travel',
    bills: 'category-bills',
    entertainment: 'category-entertainment',
    shopping: 'category-shopping',
    other: 'category-other'
};

// Format date to DD/MM/YYYY
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
    }).format(amount);
}

// Add expense
function addExpense() {
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const note = document.getElementById('note').value.trim();

    // Validation
    if (!date || !category || !amount || amount <= 0) {
        alert('Please fill in all required fields with valid values');
        return;
    }

    const expense = {
        id: Date.now(),
        date,
        category,
        amount,
        note: note || 'No note'
    };

    expenses.push(expense);
    saveToLocalStorage();
    updateExpenseTable();
    updateTotal();
    clearForm();
}

// Clear form after submission
function clearForm() {
    document.getElementById('date').value = '';
    document.getElementById('category').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('note').value = '';
    
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = today;
}

// Delete expense
function deleteExpense(id) {
    if (confirm('Are you sure you want to delete this expense?')) {
        expenses = expenses.filter(expense => expense.id !== id);
        saveToLocalStorage();
        updateExpenseTable();
        updateTotal();
    }
}

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Update expense table
function updateExpenseTable() {
    const tbody = document.querySelector('#expense-table tbody');
    tbody.innerHTML = '';

    if (expenses.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="5" style="text-align: center; padding: 3rem; color: #94a3b8;">
                No expenses recorded yet. Add your first expense above!
            </td>
        `;
        tbody.appendChild(row);
        return;
    }

    expenses.forEach(expense => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${formatDate(expense.date)}</td>
            <td>
                <span class="category-badge ${categoryColors[expense.category]}">
                    ${expense.category.charAt(0).toUpperCase() + expense.category.slice(1)}
                </span>
            </td>
            <td style="font-weight: 600;">${formatCurrency(expense.amount)}</td>
            <td>${expense.note}</td>
            <td>
                <button class="delete-btn" onclick="deleteExpense(${expense.id})">
                    Delete
                </button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Update total expenses
function updateTotal() {
    totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.querySelector('.total-amount').textContent = formatCurrency(totalExpenses);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = today;
    
    // Update UI with existing data
    updateExpenseTable();
    updateTotal();
    
    // Add keyboard support for form submission
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            addExpense();
        }
    });
});
