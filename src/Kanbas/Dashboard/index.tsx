import { Link } from "react-router-dom";
import CoursesNavigation from "../Navigation";
import * as db from "../Database";
import React from "react";

export default function Dashboard() {

    const courses = db.courses;

    return (
        <div id="wd-dashboard">
            <CoursesNavigation />
            <h1 id="wd-dashboard-title" style={{ marginLeft: "130px" }}>Dashboard</h1>
            <hr style={{ marginLeft: "130px" }}/>
            <h2 id="wd-dashboard-published" style={{ marginLeft: "130px" }}>Published Courses ({courses.length})</h2>
            <hr style={{ marginLeft: "130px" }}/>

            <div id="wd-dashboard-courses" className="row" style={{ marginLeft: "130px" }}>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <img src={course.image} width="100%" height={160} alt={"dashborad-img"}/>
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name} </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description} </p>
                                        <button className="btn btn-primary"> Go </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
