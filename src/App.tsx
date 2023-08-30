import { Dashboard, Transaction } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transaction/:id" element={<Transaction />} />
    </Routes>
  );
}

export default App;
