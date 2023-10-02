import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import { myData } from "./redux/dataSlice";
import { useURL } from "./hooks/useURL";
import Loading from "./components/Loading";
import Footer from "./layout/Footer/Footer";
import Login from "./pages/Login/LoginPage";
import Sign from "./pages/Sign/SignPage";

function App() {
    const [loading, setLoading] = useState(false);
    const dispatch = store.dispatch;

    useEffect(() => {
        dispatch(myData());
        useURL(dispatch);
    }, []);

    setTimeout(() => {
        setLoading(true);
    }, 300);

    return loading ? (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="sign" element={<Sign />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    ) : (
        <Loading />
    );
}

export default App;
