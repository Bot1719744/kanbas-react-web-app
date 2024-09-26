import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="/Kanbas/Dashboard"/>}/>
                    <Route path="/Account/*" element={<Account/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                    <Route path="/Courses/:cid/*" element={<Courses/>}/>
                    <Route path="/Calendar" element={<h1>Calendar</h1>}/>
                    <Route path="/Inbox" element={<h1>Inbox</h1>}/>
                </Routes>
            </div>

        </div>
);}
