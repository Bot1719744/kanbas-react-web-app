import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, deleteQuestion } from "./reducer";

type Question = {
    _id: string;
    type: string;
    text: string;
    points: number;
    options?: { text: string; correct: boolean }[];
    correctAnswers?: string[];
    quizId: string;
};

export default function QuizQuestionsEditor() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Fetch questions from Redux state
    const questions = useSelector(
        (state: { questionsReducer: { questions: Question[] } }) => state.questionsReducer.questions
    );

    // Filter questions for the current quiz
    const currentQuizQuestions = questions.filter((q) => q.quizId === qid);

    // Calculate the total points for the quiz
    const totalPoints = currentQuizQuestions.reduce((sum, question) => sum + question.points, 0);

    const [newQuestionType, setNewQuestionType] = useState<string>("Multiple Choice");

    const handleAddQuestion = () => {
        const newQuestion: Question = {
            _id: Date.now().toString(), // Unique ID
            type: newQuestionType,
            text: "",
            points: 0,
            options: newQuestionType === "Multiple Choice" ? [{ text: "", correct: false }] : undefined,
            correctAnswers: newQuestionType === "Fill in the Blank" ? [""] : undefined,
            quizId: qid!,
        };

        console.log("Adding question:", newQuestion);
        dispatch(addQuestion(newQuestion));
    };

    const handleEditQuestion = (questionId: string) => {
        const question = currentQuizQuestions.find((q) => q._id === questionId);
        if (question) {
            switch (question.type) {
                case "Multiple Choice":
                    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions/${questionId}/MultipleChoice`);
                    break;
                case "True/False":
                    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions/${questionId}/TrueFalse`);
                    break;
                case "Fill in the Blank":
                    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions/${questionId}/FillInBlank`);
                    break;
                default:
                    alert("Unknown question type!");
            }
        }
    };

    const handleDeleteQuestion = (questionId: string) => {
        if (window.confirm("Are you sure you want to delete this question?")) {
            dispatch(deleteQuestion(questionId));
        }
    };

    const handleCancel = () => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);

    useEffect(() => {
        console.log("Redux state questions:", questions);
        console.log("Questions for current quiz:", currentQuizQuestions);
    }, [questions, currentQuizQuestions]);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Quiz Questions Editor</h1>

            {/* Display Total Points */}
            <div className="mb-3">
                <h5>
                    Total Points: <span className="text-primary">{totalPoints}</span>
                </h5>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <label htmlFor="questionType" className="form-label me-2">
                        Question Type:
                    </label>
                    <select
                        id="questionType"
                        className="form-select"
                        value={newQuestionType}
                        onChange={(e) => setNewQuestionType(e.target.value)}
                    >
                        <option value="Multiple Choice">Multiple Choice</option>
                        <option value="True/False">True/False</option>
                        <option value="Fill in the Blank">Fill in the Blank</option>
                    </select>
                </div>
                <button className="btn btn-primary" onClick={handleAddQuestion}>
                    Add Question
                </button>
            </div>

            <ul className="list-group mb-4">
                {currentQuizQuestions.length > 0 ? (
                    currentQuizQuestions.map((question) => (
                        <li
                            key={question._id}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <div>
                                <p className="mb-1">
                                    <strong>Type:</strong> {question.type}
                                </p>
                                <p className="mb-1">
                                    <strong>Text:</strong> {question.text || "New Question"}
                                </p>
                                <p className="mb-0">
                                    <strong>Points:</strong> {question.points}
                                </p>
                            </div>
                            <div>
                                <button
                                    className="btn btn-secondary me-2"
                                    onClick={() => handleEditQuestion(question._id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteQuestion(question._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="list-group-item text-muted">No questions added yet.</li>
                )}
            </ul>

            <button className="btn btn-secondary" onClick={handleCancel}>
                Cancel
            </button>
        </div>
    );
}
