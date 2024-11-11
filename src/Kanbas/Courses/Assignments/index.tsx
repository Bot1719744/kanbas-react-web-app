import { useParams, useNavigate } from "react-router";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { setAssignments, deleteAssignment } from "./reducer"; // Ensure this is imported
import * as assignmentsClient from "./client"; // Import client functions

export default function Assignments() {
    const { cid } = useParams(); // Extract course ID from route parameters
    const { assignments } = useSelector((state: any) => state.assignmentsReducer); // Access assignments from Redux store
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize navigate for routing
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch assignments on component mount
    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const data = await assignmentsClient.fetchAllAssignments();
                dispatch(setAssignments(data)); // Dispatch to update Redux state
            } catch (error) {
                console.error("Error fetching assignments:", error);
            }
        };
        fetchAssignments();
    }, [dispatch]);

    const handleAddAssignment = () => {
        const newId = Date.now().toString();
        navigate(`/Kanbas/Courses/${cid}/Assignments/${newId}`);
    };

    const handleDeleteAssignment = async (assignmentId: string) => {
        const confirmed = window.confirm("Are you sure you want to delete this assignment?");
        if (confirmed) {
            try {
                await assignmentsClient.deleteAssignment(assignmentId);
                dispatch(deleteAssignment(assignmentId)); // Dispatch to update Redux state
            } catch (error) {
                console.error("Error deleting assignment:", error);
            }
        }
    };

    return (
        <div>
            {/* Search and Add Assignment/Group Section */}
            <div className="d-flex justify-content-between align-items-center mb-3" style={{ marginLeft: "100px" }}>
                <div className="d-flex align-items-center">
                    <FaSearch className="me-2" />
                    <input
                        id="wd-search-assignment"
                        className="form-control"
                        placeholder="Search for Assignments"
                        style={{ maxWidth: "250px" }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="d-flex">
                    <button
                        id="wd-add-assignment-group"
                        className="btn btn-secondary me-2 d-flex align-items-center"
                    >
                        <FaPlus className="me-1" /> Group
                    </button>

                    <button
                        id="wd-add-assignment"
                        className="btn btn-danger d-flex align-items-center"
                        onClick={handleAddAssignment}
                    >
                        <FaPlus className="me-1" /> Assignment
                    </button>
                </div>
            </div>

            {/* Assignment List */}
            <ul id="wd-assignments" className="list-group rounded-0" style={{ marginLeft: "100px" }}>
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS 40% of Total
                        <button className="btn btn-light ms-2">
                            <FaPlus />
                        </button>
                    </div>

                    <ul className="wd-assignment-list list-group rounded-0">
                        {assignments
                            .filter((assignment: any) => assignment.course === cid && assignment.title.toLowerCase().includes(searchTerm.toLowerCase())) // Filter assignments by course ID and search term
                            .map((assignment: any) => (
                                <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                                    <div>
                                        <BsGripVertical className="me-2 fs-3" />
                                        <a
                                            className="wd-assignment-link text-decoration-none"
                                            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        >
                                            {assignment.title}
                                        </a>
                                        <h6 className="text-muted mt-1">
                                            Multiple Modules | Not available until May 6 at 12:00am |
                                        </h6>
                                        <h6 className="text-muted">
                                            Due May 13 at 11:59pm | {assignment.points || 100} pts
                                        </h6>
                                    </div>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteAssignment(assignment._id)}
                                        aria-label="Delete Assignment"
                                    >
                                        <FaTrash />
                                    </button>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
