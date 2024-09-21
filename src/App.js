import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import ShoppingList from './components/ShoppingList';
import OrderStatus from './components/OrderStatus';

function App() {
  const items = ['Milk', 'Butter', 'Eggs'];
  
  const orders = [
    { orderId: 123, status: 'в пути' },
    { orderId: 124, status: 'доставлен' }
  ];

  return (
    <div className="App">
      <h1>Greeting</h1>
      <Greeting name="Yuliia" />

      <h2>ShoppingList</h2>
      <ShoppingList items={items} />

      <h2>OrderStatus</h2>
      {orders.map(order => (
        <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
      ))}
    </div>
  );
}

export default App;
