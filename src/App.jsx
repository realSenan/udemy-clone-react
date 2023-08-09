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

// const FetchData = async () => {
//     try {
//         const response = await axios.get(NavLink);
//         setDataLink(response.data.UdemyCategories);
//         console.log(response.data.UdemyCategories);
//     } catch (error) {
//         console.log("Erroring data :", error);
//     }
// };
// FetchData();
