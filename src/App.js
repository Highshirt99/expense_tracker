import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';

import { GlobalProvider } from './components/context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div>
      <Header />
      <div className = "container">
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
      </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
