import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function QuizStartScreen() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();

    const questions = useSelector(
        (state: { questionsReducer: { questions: any[] } }) =>
            state.questionsReducer.questions
    );

    const quizQuestions = questions.filter((q) => q.quizId === qid);

    const [answers, setAnswers] = useState<any>({});
    const [submitted, setSubmitted] = useState(false);

    const handleAnswerChange = (questionId: string, answer: any) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const handleSubmit = () => {
        setSubmitted(true);
        console.log("Submitted Answers:", answers);
        alert("Quiz Submitted!");
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };

    const isCorrect = (question: any, answer: any) => {
        if (question.type === "Multiple Choice") {
            return question.options.some(
                (option: any, index: number) => option.correct && index === answer
            );
        } else if (question.type === "True/False") {
            return question.correctAnswer === answer;
        } else if (question.type === "Fill in the Blank") {
            return question.correctAnswers.includes(answer);
        }
        return false;
    };

    return (
        <div className="container mt-5">
            <h1>Quiz Start Screen</h1>
            {quizQuestions.map((question, index) => (
                <div key={question._id} className="mb-4 p-3 border rounded">
                    <h5>
                        {index + 1}. {question.text || "Untitled Question"}
                    </h5>
                    {question.type === "Multiple Choice" && (
                        <div>
                            {question.options.map((option: any, optionIndex: number) => (
                                <div key={optionIndex}>
                                    <input
                                        type="radio"
                                        id={`${question._id}-${optionIndex}`}
                                        name={`question-${question._id}`}
                                        checked={answers[question._id] === optionIndex}
                                        onChange={() =>
                                            handleAnswerChange(question._id, optionIndex)
                                        }
                                        disabled={submitted}
                                    />
                                    <label htmlFor={`${question._id}-${optionIndex}`}>
                                        {option.text}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                    {question.type === "True/False" && (
                        <div>
                            <div>
                                <input
                                    type="radio"
                                    id={`${question._id}-true`}
                                    name={`question-${question._id}`}
                                    checked={answers[question._id] === true}
                                    onChange={() => handleAnswerChange(question._id, true)}
                                    disabled={submitted}
                                />
                                <label htmlFor={`${question._id}-true`}>True</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id={`${question._id}-false`}
                                    name={`question-${question._id}`}
                                    checked={answers[question._id] === false}
                                    onChange={() => handleAnswerChange(question._id, false)}
                                    disabled={submitted}
                                />
                                <label htmlFor={`${question._id}-false`}>False</label>
                            </div>
                        </div>
                    )}
                    {question.type === "Fill in the Blank" && (
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your answer"
                            value={answers[question._id] || ""}
                            onChange={(e) =>
                                handleAnswerChange(question._id, e.target.value)
                            }
                            disabled={submitted}
                        />
                    )}
                    {submitted && (
                        <p
                            className={
                                isCorrect(question, answers[question._id])
                                    ? "text-success"
                                    : "text-danger"
                            }
                        >
                            {isCorrect(question, answers[question._id])
                                ? "Correct"
                                : "Incorrect"}
                        </p>
                    )}
                </div>
            ))}
            {!submitted && (
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit Quiz
                </button>
            )}
        </div>
    );
}
