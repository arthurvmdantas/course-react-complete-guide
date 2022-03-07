import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    setShowForm(false);
    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => setShowForm(true);
  const cancelNewExpenseHandler = () => setShowForm(false);

  if (showForm)
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelNewExpense={cancelNewExpenseHandler}
        />
      </div>
    );

  return (
    <div className="new-expense">
      <button onClick={addNewExpenseHandler}>Add New Expense</button>
    </div>
  );
}
