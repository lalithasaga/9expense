import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
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
    const expensesRef = db.collection('expenses');

    expensesRef
      .get()
      .then((querySnapshot) => {
        const loadedExpenses = [];
        querySnapshot.forEach((doc) => {
          const expense = {
            id: doc.id,
            expense: doc.data().expense,
            description: doc.data().description,
            category: doc.data().category,
          };
          loadedExpenses.push(expense);
        });
        setExpenses(loadedExpenses);
      })
      .catch((error) => {
        console.error('Error loading expenses:', error);
      });
  }, []);

  return (
    <div>
      <h2>Expenses List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <p>Expense: {expense.expense}</p>
            <p>Description: {expense.description}</p>
            <p>Category: {expense.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
