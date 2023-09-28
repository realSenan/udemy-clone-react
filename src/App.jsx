import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { changeLoading, myData } from "./redux/dataSlice";
import { useURL } from "./hooks/useURL";
import Loading from "./components/Loading";

function App() {
    const dispatch = store.dispatch;

    useEffect(() => {
        dispatch(myData());
        useURL(dispatch);
    }, []);

    const loading = store.getState().data.isLoading;
    const data = store.getState().data.product;

    data && dispatch(changeLoading());

    return loading ? (
        <Provider store={store}>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </Provider>
    ) : (
        <Loading />
    );
}

export default App;
