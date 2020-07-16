import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import {uid} from 'react-uid';

const List = ({ expenses }) => (
  <div>
    <ListGroup>
      {expenses.map(item => (
        <ListGroupItem key={uid(item)}>
         	{item.name} - $ {item.amount}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default List
