import { useParams, useNavigate } from "react-router";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { setQuizzes, deleteQuiz } from "./reducer"; // Ensure this is imported
import * as quizzesClient from "./client"; // Import client functions

export default function Quizzes() {
    const { cid } = useParams(); // Extract course ID from route parameters
    const quizzes = useSelector((state: any) => state.quizzesReducer?.quizzes || []); // Access quizzes from Redux store
    const currentUser = useSelector((state: any) => state.accountReducer?.currentUser); // Access current user from Redux
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize navigate for routing
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch quizzes on component mount
    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const data = await quizzesClient.fetchAllQuizzes();
                dispatch(setQuizzes(data)); // Dispatch to update Redux state
            } catch (error) {
                console.error("Error fetching quizzes:", error);
            }
        };
        fetchQuizzes();
    }, [dispatch]);

    const handleAddQuiz = () => {
        const newId = Date.now().toString(); // Generate a temporary ID
        navigate(`/Kanbas/Courses/${cid}/Quizzes/New/${newId}`); // Navigate to QuizDetails
    };

    const handleDeleteQuiz = async (quizId: string) => {
        const confirmed = window.confirm("Are you sure you want to delete this quiz?");
        if (confirmed) {
            try {
                await quizzesClient.deleteQuiz(quizId);
                dispatch(deleteQuiz(quizId)); // Dispatch to update Redux state
            } catch (error) {
                console.error("Error deleting quiz:", error);
            }
        }
    };

    const handleStartQuiz = (quizId: string) => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Start`);
    };

    return (
        <div>
            {/* Search and Add Quiz/Group Section */}
            {currentUser?.role === "FACULTY" && (
                <div className="d-flex justify-content-between align-items-center mb-3" style={{ marginLeft: "100px" }}>
                    <div className="d-flex align-items-center">
                        <FaSearch className="me-2" />
                        <input
                            id="wd-search-quiz"
                            className="form-control"
                            placeholder="Search for Quizzes"
                            style={{ maxWidth: "250px" }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="d-flex">
                        <button
                            id="wd-add-quiz"
                            className="btn btn-danger d-flex align-items-center"
                            onClick={handleAddQuiz}
                        >
                            <FaPlus className="me-1" /> Quiz
                        </button>
                    </div>
                </div>
            )}

            {/* Quiz List */}
            <ul id="wd-quizzes" className="list-group rounded-0" style={{ marginLeft: "100px" }}>
                <li className="wd-quiz list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        QUIZZES 40% of Total
                    </div>

                    <ul className="wd-quiz-list list-group rounded-0">
                        {quizzes
                            .filter((quiz: any) => quiz.course === cid && quiz.title.toLowerCase().includes(searchTerm.toLowerCase())) // Filter quizzes by course ID and search term
                            .map((quiz: any) => (
                                <li
                                    key={quiz._id}
                                    className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
                                >
                                    <div>
                                        <BsGripVertical className="me-2 fs-3" />
                                        {currentUser?.role === "FACULTY" ? (
                                            <a
                                                className="wd-quiz-link text-decoration-none"
                                                href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                                            >
                                                {quiz.title}
                                            </a>
                                        ) : (
                                            <span>{quiz.title}</span>
                                        )}
                                        <h6 className="text-muted mt-1">
                                            Multiple Modules | Not available until {quiz.availableFrom || "N/A"} |
                                        </h6>
                                        <h6 className="text-muted">
                                            Due {quiz.dueDate || "N/A"} | {quiz.points || 100} pts
                                        </h6>
                                    </div>
                                    {currentUser?.role === "FACULTY" ? (
                                        <div>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteQuiz(quiz._id)}
                                                aria-label="Delete Quiz"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            className="btn btn-success"
                                            onClick={() => handleStartQuiz(quiz._id)}
                                        >
                                            Start Quiz
                                        </button>
                                    )}
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
