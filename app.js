let expenses = [];
let total = 0;

let addExpense = document.getElementById('add')
addExpense.addEventListener('click', function () {
    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('add').style.display = 'none';
});

let deleteExpense = (index) => {
    total -= parseInt(expenses[index].amount); 
    document.getElementById('total').innerHTML = total
    expenses.splice(index, 1)

    getExpenses();
}

let expList = document.getElementById('expenses-list')

function getExpenses () {
    if (expenses.length === 0) {
        expList.innerHTML = `<p class="no-exp"> Add new item. Click add button to save 
        expense. </p>`
    } else {
        expList.innerHTML = '';
        expenses.forEach((expense, index) => {
            expList.innerHTML += `<li class="exp-list"> <span class="exp-amount"> EXPENSE NAME: </span>${expense.title}
                <span class="exp-amount">AMOUNT:</span> ${expense.amount}
                 <span> <button class="delete-button" id = '${index}'
              onclick="deleteExpense('${index}' )">Delete</button></span>
              </li>`
        })
    }
}

function saveExpense () {
    let title = document.getElementById('title').value
    let amount = document.getElementById('amount').value
    if (title === '' && amount === '') {
        document.getElementById('error-text').innerHTML = 'Enter a valid data!'
    }else {
        expenses.push({title,amount});
        total += parseInt(amount);
         document.getElementById('total').innerHTML = total;
        document.getElementById('title').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('error-text').innerHTML = '';
    }
   
   return getExpenses()
}

getExpenses();