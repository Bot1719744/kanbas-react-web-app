import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
    const { courseId } = useParams(); // Retrieve course ID from URL params
    const location = useLocation(); // Get the current route location

    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0" style={{ marginLeft: "140px" }}>
            {links.map((link) => {
                const linkPath = `/Kanbas/Courses/${courseId}/${link}`;
                return (
                    <Link
                        key={link}
                        to={linkPath}
                        id={`wd-course-${link.toLowerCase()}-link`}
                        className={`list-group-item ${location.pathname === linkPath ? "bg-white text-danger border border-black" : ""}`}
                    >
                        {link}
                    </Link>
                );
            })}
        </div>
    );
}
