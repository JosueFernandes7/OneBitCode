let transactions = [];

function createTransactionContainer(id) {
  const container = document.createElement('div')
  container.classList.add('transaction')
  container.id = `transaction-${id}`
  return container
}

function createTransactionTitle(name) {
  const title = document.createElement('span')
  title.classList.add('transaction-title')
  title.textContent = name
  return title
}

function createTransactionAmount(amount) {
  const span = document.createElement('span')
  span.classList.add('transaction-amount')
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency',
  })
  const formatedAmount = formater.format(amount)
  let creditOrDebit = 'credit'
  if (amount <= 0) {
    creditOrDebit = 'debit'
  }
  span.innerHTML = ` ${formatedAmount} ${creditOrDebit.charAt(0).toUpperCase()}`
  span.classList.add(creditOrDebit)
  return span
}

function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id)
  const title = createTransactionTitle(transaction.name)
  const amount = createTransactionAmount(transaction.amount)
  container.append(title, amount)
  document.querySelector('#transactions').append(container)
}

async function fetchTransactions() {
  return await fetch('http://localhost:3000/transactions').then(
    (res) => res.json()
  )

}
function updateBalance() {
  const balanceSpan = document.querySelector('#balance');
  const balance = transactions.reduce((acc, transaction) => acc + transaction.amount,0)
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency',
  })
  balanceSpan.textContent = formater.format(balance)
}
async function setup() {
  const results = await fetchTransactions();
  transactions.push(...results);
  transactions.forEach(transaction => renderTransaction(transaction));
  updateBalance()
}
async function saveTransaction(ev) {
  ev.preventDefault();
  console.log(this.name.value);
  
  const name = this.name.value;
  const amount =  +this.amount.value;

  const newTransaction = {
    name: name,
    amount: amount
  }

  const response = await fetch('http://localhost:3000/transactions',{
    method: 'POST',
    headers: {
      "content-Type": 'application/json'
    },
    body: JSON.stringify(newTransaction)
  })
  const transaction = await response.json()

  transactions.push(transaction)
  console.log(transactions);
  renderTransaction(transaction)
  updateBalance()
}

document.addEventListener('DOMContentLoaded',setup);
document.querySelector('form').addEventListener('submit',saveTransaction)