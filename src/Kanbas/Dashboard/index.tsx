import { Link } from "react-router-dom";
import CoursesNavigation from "../Navigation";
import React from "react";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <CoursesNavigation />
            <h1 id="wd-dashboard-title" style={{ marginLeft: "130px" }}>Dashboard</h1>
            <hr style={{ marginLeft: "130px" }}/>
            <h2 id="wd-dashboard-published" style={{ marginLeft: "130px" }}>Published Courses (8)</h2>
            <hr style={{ marginLeft: "130px" }}/>

            <div id="wd-dashboard-courses" className="row" style={{ marginLeft: "130px" }}>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {/* Course 1: React JS */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home"
                            >
                                <img src="/images/reactjs.jpg" width="100%" height={160} alt="React JS" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course 2: Career Design */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1235/Home"
                            >
                                <img src="/images/CareerDesign.PNG" width="100%" height={160} alt="Career Design" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">Career Design</h5>
                                    <p className="wd-dashboard-course-title card-text">Career Design Course</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course 3: CS5010 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5010/Home"
                            >
                                <img src="/images/CS5010.PNG" width="100%" height={160} alt="CS5010" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS5010</h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Programming Design Paradigm
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course 4: CS5330 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5330/Home"
                            >
                                <img src="/images/CS5330.PNG" width="100%" height={138} alt="CS5330" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS5330</h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Pattern Recognition & Computer Vision
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course 5: CS5610 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5610/Home"
                            >
                                <img src="/images/CS5610.png" width="100%" height={160} alt="CS5610" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS5610</h5>
                                    <p className="wd-dashboard-course-title card-text">Web Development</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course 6: CS5800 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/5800/Home"
                            >
                                <img src="/images/CS5800.PNG" width="100%" height={160} alt="CS5800" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS5800</h5>
                                    <p className="wd-dashboard-course-title card-text">Algorithms</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course 7: CS6140 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/6140/Home"
                            >
                                <img src="/images/CS6140.PNG" width="100%" height={160} alt="CS6140" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">CS6140</h5>
                                    <p className="wd-dashboard-course-title card-text">Machine Learning</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course 8: F1-Orientation */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link
                                className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1111/Home"
                            >
                                <img src="/images/F1-Orientation.PNG" width="100%" height={160} alt="F1-Orientation" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">F1-Orientation</h5>
                                    <p className="wd-dashboard-course-title card-text">F1-Orientation Course</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
