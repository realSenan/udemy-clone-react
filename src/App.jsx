import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavLink from "./fetch/NavLink.json";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [dataLink, setDataLink] = useState(NavLink.UdemyCategories);


    return (
        <>
            <Header value={searchValue} setValue={searchValue} linkData={dataLink} />
            <Main />
        </>
    );
}

export default App;

