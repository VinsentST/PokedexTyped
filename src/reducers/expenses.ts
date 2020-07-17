import { Expense } from "../types/Expense";
import {
  ExpenseActionTypes,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SET_EXPENSES
} from "../types/actions";

const a:Expense={
  id: "1",
  description: "first",
  note: "first",
  amount: 1,
  createdAt: 2,
}

const expensesReducerDefaultState: Expense[] = [a];

const expenseReducer = (
  state = expensesReducerDefaultState,
  action: ExpenseActionTypes
): Expense[] => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];
    case REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_EXPENSE:
      return state.map(expense => {
        if (expense.id === action.expense.id) {
          return {
            ...expense,
            ...action.expense
          };
        } else {
          return expense;
        }
      });
    case SET_EXPENSES:
      return action.expenses;
    default:
      return state;
  }
};

export { expenseReducer };
