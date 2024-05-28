import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailScreen from "./pages/DetailScreen";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailScreen />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
