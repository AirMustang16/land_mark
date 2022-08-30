import SignInScreen from "./pages/SignInScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInScreen />} />
    </Routes>
  );
}

export default App;
