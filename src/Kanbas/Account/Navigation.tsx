import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const location = useLocation(); // Get the current route location

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0" style={{ marginLeft: "140px" }}>
            <Link
                to="/Kanbas/Account/Signin"
                id="wd-account-signin-link"
                className={`list-group-item ${location.pathname === "/Kanbas/Account/Signin" ? "bg-white text-danger border border-black" : ""}`}
            >
                Signin
            </Link>

            <Link
                to="/Kanbas/Account/Signup"
                id="wd-account-signup-link"
                className={`list-group-item ${location.pathname === "/Kanbas/Account/Signup" ? "bg-white text-danger border border-black" : ""}`}
            >
                Signup
            </Link>

            <Link
                to="/Kanbas/Account/Profile"
                id="wd-account-profile-link"
                className={`list-group-item ${location.pathname === "/Kanbas/Account/Profile" ? "bg-white text-danger border border-black" : ""}`}
            >
                Profile
            </Link>
        </div>
    );
}
