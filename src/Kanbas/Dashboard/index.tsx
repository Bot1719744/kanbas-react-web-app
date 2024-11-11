import { useNavigate } from "react-router-dom";
import CoursesNavigation from "../Navigation";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEnrollments, enroll, unenroll } from "./reducer";
import * as enrollmentsClient from "./client";
import * as coursesClient from "../Courses/client";

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
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [allCourses, setAllCourses] = useState<any[]>([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const loadEnrollments = async () => {
            if (currentUser) {
                try {
                    const data = await enrollmentsClient.fetchUserEnrollments(currentUser._id);
                    dispatch(setEnrollments(data));
                } catch (error) {
                    console.error("Error fetching enrollments:", error);
                }
            }
        };
        loadEnrollments();
    }, [currentUser, dispatch]);

    useEffect(() => {
        if (showAllCourses) {
            const loadAllCourses = async () => {
                try {
                    const allCoursesData = await coursesClient.fetchAllCourses(); // Fetch all available courses
                    console.log("Fetched all courses:", allCoursesData);
                    setAllCourses(allCoursesData);
                } catch (error) {
                    console.error("Error fetching all courses:", error);
                }
            };
            loadAllCourses();
        }
    }, [showAllCourses]);

    const toggleCourseView = () => {
        setShowAllCourses((prev) => {
            console.log("Toggled showAllCourses to:", !prev);
            return !prev;
        });
    };

    const isEnrolled = (courseId: string) => {
        const enrolled = enrollments.some(
            (enrollment: any) => enrollment.user === currentUser?._id && enrollment.course === courseId
        );
        console.log(`Checking enrollment for course ${courseId}:`, enrolled);
        return enrolled;
    };

    const handleEnroll = async (courseId: string) => {
        try {
            const newEnrollment = await enrollmentsClient.enrollInCourse(currentUser._id, courseId);
            dispatch(enroll(newEnrollment));
        } catch (error) {
            console.error("Error enrolling in course:", error);
        }
    };

    const handleUnenroll = async (courseId: string) => {
        try {
            await enrollmentsClient.unenrollFromCourse(currentUser._id, courseId);
            dispatch(unenroll({ userId: currentUser._id, courseId }));
        } catch (error) {
            console.error("Error unenrolling from course:", error);
        }
    };

    const handleNavigation = (courseId: string) => {
        if (isEnrolled(courseId)) {
            navigate(`/Kanbas/Courses/${courseId}/Home`);
        } else {
            alert("You must be enrolled in this course to access it.");
        }
    };

    const coursesToDisplay = showAllCourses ? allCourses : courses.filter((course) => isEnrolled(course._id));

    return (
        <div className="p-4" id="wd-dashboard">
            <CoursesNavigation />
            <hr style={{ marginLeft: "130px" }} />
            <h5 style={{ marginLeft: "130px" }}>New Course
                {currentUser?.role === 'FACULTY' && (
                    <>
                        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>Add</button>
                        <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">Update</button>
                    </>
                )}
                {currentUser?.role === 'STUDENT' && (
                    <button className="btn btn-primary float-end" onClick={toggleCourseView}>
                        {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
                    </button>
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

            <h1 id="wd-dashboard-title" style={{ marginLeft: "130px" }}>Dashboard</h1>
            <hr style={{ marginLeft: "130px" }} />
            <h2 id="wd-dashboard-published" style={{ marginLeft: "130px" }}>
                {showAllCourses ? "All Courses" : `Enrolled Courses (${enrollments.length})`}
            </h2>
            <hr style={{ marginLeft: "130px" }} />

            <div id="wd-dashboard-courses" className="row" style={{ marginLeft: "130px" }}>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {coursesToDisplay.map((course) => (
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

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <button className="btn btn-primary" onClick={() => handleNavigation(course._id)}>Go</button>

                                            {currentUser?.role === 'STUDENT' && (
                                                isEnrolled(course._id) ? (
                                                    <button className="btn btn-danger" onClick={() => handleUnenroll(course._id)}>Unenroll</button>
                                                ) : (
                                                    <button className="btn btn-success" onClick={() => handleEnroll(course._id)}>Enroll</button>
                                                )
                                            )}
                                        </div>

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
