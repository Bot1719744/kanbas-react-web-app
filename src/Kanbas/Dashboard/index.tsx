import { useNavigate } from "react-router-dom";
import CoursesNavigation from "../Navigation";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enroll, unenroll } from "./reducer";

type DashboardProps = {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
};

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: DashboardProps) {
    const { currentUser } = useSelector((state: any) => state.accountReducer) || {};
    const { enrollments = [] } = useSelector((state: any) => state.enrollmentsReducer || { enrollments: [] });
    const [showAllCourses, setShowAllCourses] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleCourseView = () => setShowAllCourses(!showAllCourses);

    const isEnrolled = (courseId: string) => enrollments.some(
        (enrollment: any) => enrollment.user === currentUser?._id && enrollment.course === courseId
    );

    const handleEnroll = (courseId: string) => dispatch(enroll({ userId: currentUser._id, courseId }));
    const handleUnenroll = (courseId: string) => dispatch(unenroll({ userId: currentUser._id, courseId }));

    const handleNavigation = (courseId: string) => {
        if (isEnrolled(courseId)) {
            navigate(`/Kanbas/Courses/${courseId}/Home`);
        } else {
            alert("You must be enrolled in this course to access it.");
        }
    };

    useEffect(() => {
        console.log("Enrollments from Redux state on component load:", enrollments);
    }, [enrollments]);

    return (
        <div className="p-4" id="wd-dashboard">
            <hr style={{ marginLeft: "130px" }} />
            <h5 style={{ marginLeft: "130px" }}>New Course
                {currentUser?.role === 'FACULTY' && (
                    <>
                        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>Add</button>
                        <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">Update</button>
                    </>
                )}
                {currentUser?.role === 'STUDENT' && (
                    <button className="btn btn-primary float-end" onClick={toggleCourseView}>Enrollments</button>
                )}
            </h5>

            <br />
            {currentUser?.role === 'FACULTY' && (
                <>
                    <input defaultValue={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} style={{ marginLeft: "130px" }} />
                    <textarea defaultValue={course.description} className="form-control" onChange={(e) => setCourse({ ...course, description: e.target.value })} style={{ marginLeft: "130px" }} />
                    <hr style={{ marginLeft: "130px" }} />
                </>
            )}

            <CoursesNavigation />
            <h1 id="wd-dashboard-title" style={{ marginLeft: "130px" }}>Dashboard</h1>
            <hr style={{ marginLeft: "130px" }} />
            <h2 id="wd-dashboard-published" style={{ marginLeft: "130px" }}>Published Courses ({courses.length})</h2>
            <hr style={{ marginLeft: "130px" }} />

            <div id="wd-dashboard-courses" className="row" style={{ marginLeft: "130px" }}>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        .filter((course) => showAllCourses || isEnrolled(course._id))
                        .map((course) => (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                                <div className="card rounded-3 overflow-hidden">
                                    <div className="wd-dashboard-course-link text-decoration-none text-dark">
                                        <img src={course.image} width="100%" height={160} alt={"dashboard-img"} />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {course.name}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                {course.description}
                                            </p>

                                            {/* Button group container */}
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                {/* Go Button */}
                                                <button className="btn btn-primary" onClick={() => handleNavigation(course._id)}>Go</button>

                                                {/* Enroll/Unenroll Buttons */}
                                                {currentUser?.role === 'STUDENT' && (
                                                    isEnrolled(course._id) ? (
                                                        <button className="btn btn-danger" onClick={() => handleUnenroll(course._id)}>Unenroll</button>
                                                    ) : (
                                                        <button className="btn btn-success" onClick={() => handleEnroll(course._id)}>Enroll</button>
                                                    )
                                                )}
                                            </div>

                                            {/* Faculty-specific buttons */}
                                            {currentUser?.role === 'FACULTY' && (
                                                <div className="mt-2 d-flex justify-content-end">
                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }} className="btn btn-danger ms-2" id="wd-delete-course-click">Delete</button>

                                                    <button id="wd-edit-course-click" onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }} className="btn btn-warning ms-2">Edit</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
