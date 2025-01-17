import React from 'react'

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from 'reactstrap'



const Form = ({ name, amount, handleName, handleAmount, handleSubmitForm, handleClearExpenses }) => (
  <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className='row'>
      <Label for='exampleEmail' sm={2}>
        Name of Expense
      </Label>
      <Col sm={4}>
        <Input
          type='text'
          name='name'
          id='expenseName'
          placeholder='expense'
          value={name}
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className='row'>
      <Label for='exampleEmail' sm={2}>
        Amount ($)
      </Label>
      <Col sm={4}>
        <Input
          type='number'
          name='amount'
          id='expenseAmount'
          placeholder='0.00'
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup>
    
	<div>
	<Button className="buttonSpace" type='submit' color='primary'>
      Add
    </Button>

	<Button className="buttonSpace" type = 'submit' color = 'danger' onClick = {handleClearExpenses}>
		Clear all 
	</Button>
	</div>
  </BTForm>
)

export default Form
