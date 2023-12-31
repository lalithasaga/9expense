import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/Authform';
import Header from './components/Header';
import { AuthContextProvider } from './components/AuthContext';
import Dashboard from './components/Dashboard';
import ContactDetailsForm from './components/ContactDetailsForm';
import ExpenseForm from './components/ExpenseForm'; // Import the ExpenseForm component

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactDetailsForm />} />
          <Route path="/expense" element={<ExpenseForm />} /> 
          </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;



