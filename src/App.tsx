import "./App.css";
import CreditCard from "./components/CreditCard";
import CSVUploader from "./components/CSVUploader";

function App() {
  return (
    <div className="bg-[#f0f0f0] relative">
      <CreditCard />
      <CSVUploader />
    </div>
  );
}

export default App;
