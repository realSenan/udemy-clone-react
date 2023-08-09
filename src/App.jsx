import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import axios from "axios";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [dataLink, setDataLink] = useState([]);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const response = await axios.get("/src/fetch/NavLink.json");
                setDataLink(response.data.UdemyCategories);
                console.log(response.data.UdemyCategories);
            } catch (error) {
                console.log("Erroring data :", error);
            }
        };
        FetchData()
    }, []);

    return (
        <>
            <Header value={searchValue} setValue={searchValue} dataLink={dataLink} />
            <Main />
        </>
    );
}

export default App;
