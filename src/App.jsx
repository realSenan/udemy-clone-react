import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
