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
import ForgetPassw from "./pages/ForgotPass/ForgotPassw";
import Course from "./pages/Course/Course";
import ShopCart from "./pages/ShopCart/ShopCart";
import { Toaster } from "react-hot-toast";
import WashListPage from "./pages/LearningPageComp/LearningPage";
import AllCourse from "./pages/LearningPageComp/Lists/AllCourse";
import MyList from "./pages/LearningPageComp/Lists/MyList";
import WishlistP from "./pages/LearningPageComp/Lists/WishlistP";
import Archived from "./pages/LearningPageComp/Lists/Archived";
import LearningTools from "./pages/LearningPageComp/Lists/LearningTools";
import SearchP from "./pages/SearchP/SearchP";

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
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        background: "#363636",
                        color: "#fff",
                    },
                }}
            />

            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="sign" element={<Sign />} />
                    <Route path="forgot-password" element={<ForgetPassw />} />
                    <Route path="my-courses" element={<WashListPage />}>
                        <Route index path="allCourses" element={<AllCourse />} />
                        <Route path="myList" element={<MyList />} />
                        <Route path="wishlist" element={<WishlistP />} />
                        <Route path="archived" element={<Archived />} />
                        <Route path="learningTools" element={<LearningTools />} />
                    </Route>

                    <Route path="search" element={<SearchP />} />

                    <Route path="course" element={<Course />}>
                        {/* Video Play section */}
                    </Route>

                    <Route path="cart-shop" element={<ShopCart />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    ) : (
        <Loading />
    );
}

export default App;
