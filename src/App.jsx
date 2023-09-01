import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
