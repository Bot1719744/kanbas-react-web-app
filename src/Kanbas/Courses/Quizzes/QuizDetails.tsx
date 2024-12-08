import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateQuiz } from "./reducer";

export default function QuizDetails() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const quizzes = useSelector((state: any) => state.quizzesReducer?.quizzes || []);
    const currentUser = useSelector((state: any) => state.accountReducer?.currentUser);

    const quiz = quizzes.find((q: any) => q._id === qid) || {
        type: "Graded Quiz",
        points: 0,
        assignmentGroup: "Quizzes",
        shuffleAnswers: true,
        timeLimit: 20,
        multipleAttempts: false,
        maxAttempts: 1,
        showCorrectAnswers: false,
        accessCode: "",
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        dueDate: "",
        availableFrom: "",
        availableUntil: "",
    };

    const [quizDetails, setQuizDetails] = useState(quiz);

    useEffect(() => {
        setQuizDetails(quiz);
    }, [quiz]);

    const handleEdit = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
    };

    const handlePreview = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`);
    };

    const handleStartQuiz = () => {
        alert("Quiz started! Access code: " + quizDetails.accessCode);
    };

    return (
        <div style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}>{quizDetails.type}</h1>
                <div>
                    {currentUser?.role === "FACULTY" ? (
                        <>
                            <button
                                onClick={handleEdit}
                                style={{
                                    backgroundColor: "#007bff",
                                    color: "white",
                                    border: "none",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                    marginRight: "10px",
                                }}
                            >
                                Edit Quiz
                            </button>
                            <button
                                onClick={handlePreview}
                                style={{
                                    backgroundColor: "#6c757d",
                                    color: "white",
                                    border: "none",
                                    padding: "10px 15px",
                                    borderRadius: "5px",
                                }}
                            >
                                Preview Quiz
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleStartQuiz}
                            style={{
                                backgroundColor: "#28a745",
                                color: "white",
                                border: "none",
                                padding: "10px 15px",
                                borderRadius: "5px",
                            }}
                        >
                            Start Quiz
                        </button>
                    )}
                </div>
            </div>

            <hr />

            <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "5px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
                <h3 style={{ fontSize: "1.5rem", color: "#0056b3", marginBottom: "10px" }}>Quiz Information</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    <div style={{ flex: "1" }}>
                        <p><strong>Points:</strong> {quizDetails.points}</p>
                        <p><strong>Assignment Group:</strong> {quizDetails.assignmentGroup}</p>
                        <p><strong>Time Limit:</strong> {quizDetails.timeLimit} minutes</p>
                        <p><strong>Due Date:</strong> {quizDetails.dueDate || "Not Set"}</p>
                        <p><strong>Available From:</strong> {quizDetails.availableFrom || "Not Set"}</p>
                        <p><strong>Available Until:</strong> {quizDetails.availableUntil || "Not Set"}</p>
                    </div>
                    <div style={{ flex: "1" }}>
                        <p><strong>Shuffle Answers:</strong> {quizDetails.shuffleAnswers ? "Yes" : "No"}</p>
                        <p><strong>Multiple Attempts:</strong> {quizDetails.multipleAttempts ? "Yes" : "No"}</p>
                        {quizDetails.multipleAttempts && (
                            <p><strong>Max Attempts:</strong> {quizDetails.maxAttempts}</p>
                        )}
                        <p><strong>Show Correct Answers:</strong> {quizDetails.showCorrectAnswers ? "Yes" : "No"}</p>
                        <p><strong>Access Code:</strong> {quizDetails.accessCode || "None"}</p>
                    </div>
                </div>
            </div>

            <hr />

            <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "5px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }}>
                <h3 style={{ fontSize: "1.5rem", color: "#0056b3", marginBottom: "10px" }}>Quiz Settings</h3>

                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                    <li><strong>One Question at a Time:</strong> {quizDetails.oneQuestionAtATime ? "Yes" : "No"}</li>
                    <li><strong>Webcam Required:</strong> {quizDetails.webcamRequired ? "Yes" : "No"}</li>
                    <li><strong>Lock Questions After Answering:</strong> {quizDetails.lockQuestionsAfterAnswering ? "Yes" : "No"}</li>
                </ul>
            </div>
        </div>
    );
}
