import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import KanbasNavigation from "../Navigation";

export default function Account() {
    return (
        <div>
            <KanbasNavigation />

            <div id="wd-account-screen" style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
                <div
                    style={{
                        width: "250px",
                        marginRight: "40px",
                        paddingRight: "20px",
                    }}
                >
                    <AccountNavigation />
                </div>

                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                        <Route path="/Signin" element={<Signin />} />
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/Signup" element={<Signup />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
