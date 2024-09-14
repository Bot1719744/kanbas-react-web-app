import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
    return (
        <div>
            <h1>Labs</h1>

            <h1>Github Repo</h1>
            Please
            <a id="wd-lipsum" href="https://github.com/Bot1719744/kanbas-react-web-app">click here</a>
            to navigate to my github repo for this project<br/>

            <h1>Dingwen Liu</h1>

            <TOC/>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1"/>}/>
                <Route path="Lab1" element={<Lab1/>}/>
                <Route path="Lab2" element={<Lab2/>}/>
                <Route path="Lab3" element={<Lab3/>}/>
            </Routes>


        </div>
    );
}
