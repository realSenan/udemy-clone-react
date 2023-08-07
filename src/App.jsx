import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import axios from "axios";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [linkData, setLinkData] = useState([]);

    useEffect(() => {
        axios.get("/src/fetch/NavLink.json").then((response) => {
            setLinkData(response.data.UdemyCategories);
            console.log(response.data.UdemyCategories)
        });
    }, []);

    return (
        <>
            <Header value={searchValue} setValue={searchValue} linkData={linkData} />
            <Main />
        </>
    );
}

export default App;
