import React, { useState, useEffect } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import Form from './components/Form';
import List from './components/List';
import pic from './pic.jpg';

const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []

function App() {
  	const [expenses, setExpenses] = useState(ALL_EXPENSES)
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');

	const handleName = event => {
  		//console.log('Name ', event.target.value)
  	setName(event.target.value)
	}

	const handleAmount = event => {
  	//console.log('Amount ', event.target.value)
  	setAmount(event.target.value)
	}	

	const handleSubmitForm = event => {
  		event.preventDefault()
  		if (name !== '' && amount > 0) {
    		const expense = { name, amount }
    		setExpenses([...expenses, expense])
    		setName('')
    		setAmount('')
  		} else {
    		console.log('Invalid expense name or the amount')
	  	}
	}

	const handleClearExpenses = () => {
		setExpenses([])
	}

	useEffect(() => {
  		localStorage.setItem('expenses', JSON.stringify(expenses))
		}, [expenses])

	
  return (
    <Container>
      <Jumbotron fluid>
        <h2 className='display-6 text-center'>
          My Budget App 
	    </h2>
          
	  	<img src= {pic} class="img-fluid w-25 p-3 rounded mx-auto d-block" alt='budget icon' />


        <div className='text-center'>
          <p>
            Total:{' '}
            <span className='text-success'>
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
 	
	  <Form
	  	name={name}
  		amount={amount}
  		handleName={handleName}
  		handleAmount={handleAmount}
  		handleSubmitForm={handleSubmitForm}
	 	handleClearExpenses={handleClearExpenses}
	 	/>
	  <List expenses={expenses} />
      </Jumbotron>
    </Container>
  )
}

export default App
