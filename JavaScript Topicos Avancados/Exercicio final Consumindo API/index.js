let transactions = []

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

function createEditTransactionBtn(transaction) {
  const editBtn = document.createElement('button')
  editBtn.classList.add('edit-btn')
  editBtn.textContent = 'Editar'
  editBtn.addEventListener('click', () => {
    console.log('aqui')
    document.querySelector('#id').value = transaction.id
    document.querySelector('#name').value = transaction.name
    document.querySelector('#amount').value = transaction.amount
  })
  return editBtn
}

function createDeleteTransactionBtn(transaction) {
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.textContent = 'deletar'
  deleteBtn.addEventListener('click', async (e) => {
    const divElement = e.target.parentElement
    const id = transaction.id
    const index = transactions.findIndex((e) => e.id == id)

    // exclui
    await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    transactions.splice(index, 1)
    divElement.remove()
    updateBalance()
  })
  return deleteBtn
}

function renderTransaction(transaction, editable) {
  const container = createTransactionContainer(transaction.id)
  const title = createTransactionTitle(transaction.name)
  const amount = createTransactionAmount(transaction.amount)
  const editBtn = createEditTransactionBtn(transaction)
  const deleteBtn = createDeleteTransactionBtn(transaction)
  container.append(title, amount, editBtn, deleteBtn)

  if (editable == true) return container

  document.querySelector('#transactions').append(container)
}

async function fetchTransactions() {
  return await fetch('http://localhost:3000/transactions').then((res) =>
    res.json()
  )
}

function updateBalance() {
  const balanceSpan = document.querySelector('#balance')
  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  )
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency',
  })
  balanceSpan.textContent = formater.format(balance)
}

async function setup() {
  const results = await fetchTransactions()
  transactions.push(...results)
  transactions.forEach((transaction) => renderTransaction(transaction))
  updateBalance()
}

async function saveTransaction(ev) {
  ev.preventDefault()

  const id = this.id.value
  const name = this.name.value
  const amount = +this.amount.value
  const newTransaction = {
    name: name,
    amount: amount,
  }
  async function editAPI(id, newTransaction) {
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newTransaction),
      headers: {
        'content-Type': 'application/json',
      },
    })
    const transaction = await response.json()
    const index = transactions.findIndex((element) => element.id == id)
    transactions.splice(index, 1, transaction)

    let transactionHtml = document.querySelector(`#transaction-${id}`)
    transactionHtml.remove()
    renderTransaction(transaction)
  }
  if (name != '' && amount != '' && id) {
    // editar
    await editAPI(id, newTransaction)
  } else {
    // criar
    const response = await fetch('http://localhost:3000/transactions/', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
    const transaction = await response.json()

    transactions.push(transaction)
    renderTransaction(transaction)
  }

  this.reset()
  updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)
document.querySelector('form').addEventListener('submit', saveTransaction)
