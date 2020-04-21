import React from 'react';
import CounterMessage from './CounterMessage'

function App() {
	/**
	 * Your code goes here.
	 */
	 const [counter,setCount] = React.useState(0)
	 const decrement = () => {
	 	 setCount(counter - 1)
	 	 console.log(counter)
	 }
	 
	return (
		<div className="App">
			<h1>Counter App</h1>
			<button data-testid="decrementButton" onClick={decrement}>-</button>
			<button data-testid="incrementButton" onClick={() =>setCount(counter + 1)}>+</button>
			<hr></hr>
			<CounterMessage counter={counter} />
		</div>
	);
}


export default App;
