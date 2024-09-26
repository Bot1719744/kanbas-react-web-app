import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaInbox, FaUserAlt, FaCalendarAlt, FaCogs } from "react-icons/fa";

export default function KanbasNavigation() {
    const location = useLocation();

    return (
        <div id="wd-kanbas-navigation" style={{ width: 110 }}
             className="list-group rounded-0 position-fixed bottom-0 top-0 bg-black z-2">
            <a id="wd-neu-link"
               href="https://www.northeastern.edu/"
               className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px" alt="NEU Logo" />
            </a>

            <Link to="/Kanbas/Account" id="wd-account-link"
                  className={`list-group-item text-center border-0 ${location.pathname === "/Kanbas/Account" ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaUserAlt className={`fs-1 ${location.pathname === "/Kanbas/Account" ? "text-danger" : "text-white"}`} />
                <div>Account</div>
            </Link>

            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
                  className={`list-group-item text-center border-0 ${location.pathname === "/Kanbas/Dashboard" ? "bg-white text-danger" : "bg-black text-white"}`}>
                <AiOutlineDashboard className="fs-1 text-danger" />
                <div>Dashboard</div>
            </Link>

            <Link to="/Kanbas/Courses" id="wd-course-link"
                  className={`list-group-item text-center border-0 ${location.pathname === "/Kanbas/Courses" ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaCogs className="fs-1 text-danger" />
                <div>Courses</div>
            </Link>

            <Link to="/Kanbas/Calendar" id="wd-calendar-link"
                  className={`list-group-item text-center border-0 ${location.pathname === "/Kanbas/Calendar" ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaCalendarAlt className="fs-1 text-danger" />
                <div>Calendar</div>
            </Link>

            <Link to="/Kanbas/Inbox" id="wd-inbox-link"
                  className={`list-group-item text-center border-0 ${location.pathname === "/Kanbas/Inbox" ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaInbox className="fs-1 text-danger" />
                <div>Inbox</div>
            </Link>

            <Link to="/Labs" id="wd-labs-link"
                  className={`list-group-item text-center border-0 ${location.pathname === "/Labs" ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaCogs className="fs-1 text-danger" />
                <div>Labs</div>
            </Link>
        </div>
    );
}
