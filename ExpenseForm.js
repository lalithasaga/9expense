import React, { useRef } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import ExpenseInput from './ExpenseInput';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const expenseInputRef = useRef();
  const descriptionInputRef = useRef();
  const categoryInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredExpense = expenseInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;

    const expenseData = {
      expense: enteredExpense,
      description: enteredDescription,
      category: enteredCategory,
    };

    const firebaseConfig = {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      appId: 'YOUR_APP_ID',
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore(); // Access the Firestore database

    db.collection('expenses')
      .add(expenseData)
      .then(() => {
        console.log('Expense added successfully');
      })
      .catch((error) => {
        console.error('Error adding expense:', error);
      });

    expenseInputRef.current.value = '';
    descriptionInputRef.current.value = '';
    categoryInputRef.current.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <ExpenseInput
        id="expense"
        label="Expense"
        type="text"
        required
        inputRef={expenseInputRef}
      />
      <ExpenseInput
        id="description"
        label="Description"
        type="text"
        required
        inputRef={descriptionInputRef}
      />
     <div className="category">
  <label htmlFor="category">Category
    <select id="category" ref={categoryInputRef}>
      <option value="">Select a category</option>
      <option value="Food">Food</option>
      <option value="Petrol">Petrol</option>
      <option value="Salary">Salary</option>
    </select>
  </label>
</div>


      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

