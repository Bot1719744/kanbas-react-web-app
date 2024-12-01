import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const location = useLocation();
    const navigate = useNavigate();
    const active = (path: string) => (pathname.includes(path) ? "active" : "");
    const { pathname } = useLocation();

    // Redirect to the appropriate screen when the Account link is clicked in Kanbas Navigation
    useEffect(() => {
        if (location.pathname === "/Kanbas/Account") {
            navigate(currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin");
        }
    }, [location.pathname, currentUser, navigate]);

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0" style={{ marginLeft: "140px" }}>

            {links.includes("Signin") && (
                <Link
                    to="/Kanbas/Account/Signin"
                    id="wd-account-signin-link"
                    className={`list-group-item ${location.pathname === "/Kanbas/Account/Signin" ? "bg-white text-danger border border-black" : ""}`}
                >
                    Signin
                </Link>
            )}

            {links.includes("Signup") && (
                <Link
                    to="/Kanbas/Account/Signup"
                    id="wd-account-signup-link"
                    className={`list-group-item ${location.pathname === "/Kanbas/Account/Signup" ? "bg-white text-danger border border-black" : ""}`}
                >
                    Signup
                </Link>
            )}

            {links.includes("Profile") && (
                <Link
                    to="/Kanbas/Account/Profile"
                    id="wd-account-profile-link"
                    className={`list-group-item ${location.pathname === "/Kanbas/Account/Profile" ? "bg-white text-danger border border-black" : ""}`}
                >
                    Profile
                </Link>
            )}

            {currentUser && currentUser.role === "ADMIN" && (
                <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
        </div>
    );
}
