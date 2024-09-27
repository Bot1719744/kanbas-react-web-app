import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
    const location = useLocation(); // Get the current route location

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0" style={{ marginLeft: "140px" }}>
            <Link
                to="/Kanbas/Courses/1234/Home"
                id="wd-course-home-link"
                className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/Home" ? "bg-white text-danger border border-black" : ""}`}
            >
                Home
            </Link>

            <Link
                to="/Kanbas/Courses/1234/Modules"
                id="wd-course-modules-link"
                className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/Modules" ? "bg-white text-danger border border-black" : ""}`}
            >
                Modules
            </Link>

            <Link
                to="/Kanbas/Courses/1234/Piazza"
                id="wd-course-piazza-link"
                className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/Piazza" ? "bg-white text-danger border border-black" : ""}`}
            >
                Piazza
            </Link>

            <Link
                to="/Kanbas/Courses/1234/Zoom"
                id="wd-course-zoom-link"
                className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/Zoom" ? "bg-white text-danger border border-black" : ""}`}
            >
                Zoom
            </Link>

            <Link
                to="/Kanbas/Courses/1234/Assignments"
                id="wd-course-assignments-link"
                className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/Assignments" ? "bg-white text-danger border border-black" : ""}`}
            >
                Assignments
            </Link>

            <Link
                to="/Kanbas/Courses/1234/Quizzes"
                id="wd-course-quizzes-link"
                className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/Quizzes" ? "bg-white text-danger border border-black" : ""}`}
            >
                Quizzes
            </Link>

            <Link
                to="/Kanbas/Courses/1234/People"
                id="wd-course-people-link"
                className={`list-group-item ${location.pathname === "/Kanbas/Courses/1234/People" ? "bg-white text-danger border border-black" : ""}`}
            >
                People
            </Link>
        </div>
    );
}
