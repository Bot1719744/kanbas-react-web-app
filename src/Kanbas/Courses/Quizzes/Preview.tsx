import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

type Option = {
    text: string;
    correct: boolean;
};

type Question = {
    _id: string;
    quizId: string; // Add this property
    type: "Multiple Choice" | "True/False" | "Fill in the Blank";
    text: string;
    points: number;
    options?: Option[];
    correctAnswers?: string[];
};

export default function QuizPreview() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();

    const quizzes = useSelector((state: any) => state.quizzesReducer?.quizzes || []);
    const questions = useSelector((state: any) => state.questionsReducer?.questions || []);
    const quiz = quizzes.find((q: any) => q._id === qid);
    const quizQuestions = questions.filter((q: Question) => q.quizId === qid); // Now this works

    const [answers, setAnswers] = useState<{ [key: string]: any }>({});
    const [score, setScore] = useState<number | null>(null);

    const handleAnswerChange = (questionId: string, value: any) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const calculateScore = () => {
        let totalScore = 0;

        quizQuestions.forEach((question: Question) => {
            const userAnswer = answers[question._id];

            if (question.type === "Multiple Choice" || question.type === "True/False") {
                const correctOption = question.options?.find((o: Option) => o.correct);
                if (correctOption && userAnswer === correctOption.text) {
                    totalScore += question.points;
                }
            } else if (question.type === "Fill in the Blank") {
                if (question.correctAnswers?.includes(userAnswer.trim())) {
                    totalScore += question.points;
                }
            }
        });

        setScore(totalScore);
    };

    const handleEditQuiz = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Questions`);
    };

    return (
        <div className="container mt-5">
            <h1>{quiz?.title || "Quiz Preview"}</h1>
            <ul className="list-group mb-4">
                {quizQuestions.map((question: Question) => (
                    <li key={question._id} className="list-group-item">
                        <h5>{question.text}</h5>
                        <p><strong>Points:</strong> {question.points}</p>

                        {question.type === "Multiple Choice" && (
                            <div>
                                {question.options?.map((option: Option, index: number) => (
                                    <div key={index}>
                                        <input
                                            type="radio"
                                            name={`question-${question._id}`}
                                            checked={answers[question._id] === option.text}
                                            onChange={() => handleAnswerChange(question._id, option.text)}
                                        />
                                        {option.text}
                                    </div>
                                ))}
                            </div>
                        )}

                        {question.type === "True/False" && (
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name={`question-${question._id}`}
                                        checked={answers[question._id] === "True"}
                                        onChange={() => handleAnswerChange(question._id, "True")}
                                    />
                                    True
                                </label>
                                <label className="ms-3">
                                    <input
                                        type="radio"
                                        name={`question-${question._id}`}
                                        checked={answers[question._id] === "False"}
                                        onChange={() => handleAnswerChange(question._id, "False")}
                                    />
                                    False
                                </label>
                            </div>
                        )}

                        {question.type === "Fill in the Blank" && (
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your answer"
                                value={answers[question._id] || ""}
                                onChange={(e) => handleAnswerChange(question._id, e.target.value)}
                            />
                        )}
                    </li>
                ))}
            </ul>

            <button className="btn btn-success me-3" onClick={calculateScore}>
                Submit and Calculate Score
            </button>
            <button className="btn btn-secondary" onClick={handleEditQuiz}>
                Edit Quiz
            </button>

            {score !== null && (
                <div className="alert alert-info mt-4">
                    <h4>Your Score: {score}/{quizQuestions.reduce((sum: number, q: Question) => sum + q.points, 0)}</h4>
                </div>
            )}
        </div>
    );
}
