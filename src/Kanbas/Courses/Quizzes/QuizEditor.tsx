import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, updateQuiz } from "./reducer";
import * as quizzesClient from "./client";
import QuizQuestionsEditor from "./QuestionEditor/QuizQuestionsEditor";

export default function QuizEditor() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const quizzes = useSelector((state: any) => state.quizzesReducer?.quizzes || []);
    const quiz = quizzes.find((q: any) => q.course === cid && q._id === qid);

    const [activeTab, setActiveTab] = useState("Details");

    const [title, setTitle] = useState(quiz?.title || "");
    const [description, setDescription] = useState(quiz?.description || "");
    const [points, setPoints] = useState(quiz?.points || 100);
    const [type, setType] = useState(quiz?.type || "Graded Quiz");
    const [assignmentGroup, setAssignmentGroup] = useState(quiz?.assignmentGroup || "Quizzes");
    const [shuffleAnswers, setShuffleAnswers] = useState(quiz?.shuffleAnswers ?? true);
    const [timeLimit, setTimeLimit] = useState(quiz?.timeLimit || 20);
    const [multipleAttempts, setMultipleAttempts] = useState(quiz?.multipleAttempts ?? false);
    const [showCorrectAnswers, setShowCorrectAnswers] = useState(quiz?.showCorrectAnswers ?? false);
    const [accessCode, setAccessCode] = useState(quiz?.accessCode || "");
    const [oneQuestionAtATime, setOneQuestionAtATime] = useState(quiz?.oneQuestionAtATime ?? true);
    const [webcamRequired, setWebcamRequired] = useState(quiz?.webcamRequired ?? false);
    const [lockQuestionsAfterAnswering, setLockQuestionsAfterAnswering] = useState(
        quiz?.lockQuestionsAfterAnswering ?? false
    );
    const [dueDate, setDueDate] = useState(quiz?.dueDate || "");
    const [availableFrom, setAvailableFrom] = useState(quiz?.availableFrom || "");
    const [availableUntil, setAvailableUntil] = useState(quiz?.availableUntil || "");

    useEffect(() => {
        if (quiz) {
            setTitle(quiz.title);
            setDescription(quiz.description);
            setPoints(quiz.points);
            setType(quiz.type);
            setAssignmentGroup(quiz.assignmentGroup);
            setShuffleAnswers(quiz.shuffleAnswers);
            setTimeLimit(quiz.timeLimit);
            setMultipleAttempts(quiz.multipleAttempts);
            setShowCorrectAnswers(quiz.showCorrectAnswers);
            setAccessCode(quiz.accessCode);
            setOneQuestionAtATime(quiz.oneQuestionAtATime);
            setWebcamRequired(quiz.webcamRequired);
            setLockQuestionsAfterAnswering(quiz.lockQuestionsAfterAnswering);
            setDueDate(quiz.dueDate);
            setAvailableFrom(quiz.availableFrom);
            setAvailableUntil(quiz.availableUntil);
        }
    }, [quiz]);

    const handleSave = () => {
        if (!qid || !quiz) {
            alert("You need to create the quiz first before making changes.");
            return;
        }

        const updatedQuiz = {
            ...quiz,
            title,
            description,
            points,
            type,
            assignmentGroup,
            shuffleAnswers,
            timeLimit,
            multipleAttempts,
            showCorrectAnswers,
            accessCode,
            oneQuestionAtATime,
            webcamRequired,
            lockQuestionsAfterAnswering,
            dueDate: dueDate || null,
            availableFrom: availableFrom || null,
            availableUntil: availableUntil || null,
        };

        quizzesClient.updateQuiz(updatedQuiz)
            .then((updated) => {
                dispatch(updateQuiz(updated));
                navigate(`/Kanbas/Courses/${cid}/Quizzes/New/${qid}`);
            })
            .catch((error) => {
                console.error("Error saving quiz:", error);
            });
    };

    const handleSaveAndPublish = async () => {
        const newQuiz = {
            _id: qid || Date.now().toString(),
            course: cid,
            title,
            description,
            points,
            type,
            assignmentGroup,
            shuffleAnswers,
            timeLimit,
            multipleAttempts,
            showCorrectAnswers,
            accessCode,
            oneQuestionAtATime,
            webcamRequired,
            lockQuestionsAfterAnswering,
            dueDate: dueDate || null,
            availableFrom: availableFrom || null,
            availableUntil: availableUntil || null,
            published: true,
        };

        try {
            const createdQuiz = await quizzesClient.createQuiz(newQuiz);
            dispatch(addQuiz(createdQuiz));
            navigate(`/Kanbas/Courses/${cid}/Quizzes`);
        } catch (error) {
            console.error("Error publishing quiz:", error);
        }
    };

    const handleCancel = () => navigate(`/Kanbas/Courses/${cid}/Quizzes`);

    return (
        <div className="container mt-5">
            <h1>Quiz Editor</h1>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "Details" ? "active" : ""}`}
                        onClick={() => setActiveTab("Details")}
                    >
                        Details
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "Questions" ? "active" : ""}`}
                        onClick={() => setActiveTab("Questions")}
                    >
                        Questions
                    </button>
                </li>
            </ul>

            <div className="tab-content mt-4">
                {activeTab === "Details" && (
                    <div>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Quiz Title</label>
                            <input
                                id="title"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea
                                id="description"
                                className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="points" className="form-label">Points</label>
                            <input
                                id="points"
                                className="form-control"
                                type="number"
                                value={points}
                                onChange={(e) => setPoints(Number(e.target.value))}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">Quiz Type</label>
                            <select
                                id="type"
                                className="form-control"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="Graded Quiz">Graded Quiz</option>
                                <option value="Practice Quiz">Practice Quiz</option>
                                <option value="Graded Survey">Graded Survey</option>
                                <option value="Ungraded Survey">Ungraded Survey</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="assignmentGroup" className="form-label">Assignment Group</label>
                            <select
                                id="assignmentGroup"
                                className="form-control"
                                value={assignmentGroup}
                                onChange={(e) => setAssignmentGroup(e.target.value)}
                            >
                                <option value="Quizzes">Quizzes</option>
                                <option value="Exams">Exams</option>
                                <option value="Assignments">Assignments</option>
                                <option value="Project">Project</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="shuffleAnswers" className="form-label">Shuffle Answers</label>
                            <select
                                id="shuffleAnswers"
                                className="form-control"
                                value={shuffleAnswers ? "Yes" : "No"}
                                onChange={(e) => setShuffleAnswers(e.target.value === "Yes")}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="timeLimit" className="form-label">Time Limit (Minutes)</label>
                            <input
                                id="timeLimit"
                                className="form-control"
                                type="number"
                                value={timeLimit}
                                onChange={(e) => setTimeLimit(Number(e.target.value))}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="multipleAttempts" className="form-label">Multiple Attempts</label>
                            <select
                                id="multipleAttempts"
                                className="form-control"
                                value={multipleAttempts ? "Yes" : "No"}
                                onChange={(e) => setMultipleAttempts(e.target.value === "Yes")}
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="showCorrectAnswers" className="form-label">Show Correct Answers</label>
                            <select
                                id="showCorrectAnswers"
                                className="form-control"
                                value={showCorrectAnswers ? "Yes" : "No"}
                                onChange={(e) => setShowCorrectAnswers(e.target.value === "Yes")}
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="accessCode" className="form-label">Access Code</label>
                            <input
                                id="accessCode"
                                className="form-control"
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="oneQuestionAtATime" className="form-label">One Question at a Time</label>
                            <select
                                id="oneQuestionAtATime"
                                className="form-control"
                                value={oneQuestionAtATime ? "Yes" : "No"}
                                onChange={(e) => setOneQuestionAtATime(e.target.value === "Yes")}
                            >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="webcamRequired" className="form-label">Webcam Required</label>
                            <select
                                id="webcamRequired"
                                className="form-control"
                                value={webcamRequired ? "Yes" : "No"}
                                onChange={(e) => setWebcamRequired(e.target.value === "Yes")}
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lockQuestionsAfterAnswering" className="form-label">Lock Questions After Answering</label>
                            <select
                                id="lockQuestionsAfterAnswering"
                                className="form-control"
                                value={lockQuestionsAfterAnswering ? "Yes" : "No"}
                                onChange={(e) => setLockQuestionsAfterAnswering(e.target.value === "Yes")}
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dueDate" className="form-label">Due Date</label>
                            <input
                                id="dueDate"
                                className="form-control"
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="availableFrom" className="form-label">Available From</label>
                            <input
                                id="availableFrom"
                                className="form-control"
                                type="date"
                                value={availableFrom}
                                onChange={(e) => setAvailableFrom(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="availableUntil" className="form-label">Available Until</label>
                            <input
                                id="availableUntil"
                                className="form-control"
                                type="date"
                                value={availableUntil}
                                onChange={(e) => setAvailableUntil(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {activeTab === "Questions" && (
                    <QuizQuestionsEditor />
                )}
            </div>

            <div className="d-flex justify-content-end">
                <button onClick={handleCancel} className="btn btn-secondary me-2">Cancel</button>
                <button onClick={handleSave} className="btn btn-success me-2">Save</button>
                <button onClick={handleSaveAndPublish} className="btn btn-primary">Save and Publish</button>
            </div>
        </div>
    );
}
