import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuestion } from "./reducer";

export default function FillInBlankEditor() {
    const { questionId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Fetch the question from Redux
    const question = useSelector((state: any) =>
        state.questionsReducer.questions.find((q: any) => q._id === questionId)
    );

    const [title, setTitle] = useState<string>(question?.title || "");
    const [points, setPoints] = useState<number>(question?.points || 0);
    const [questionText, setQuestionText] = useState<string>(question?.text || "");
    const [answers, setAnswers] = useState<string[]>(question?.correctAnswers || [""]);

    const handleAddAnswer = () => setAnswers([...answers, ""]);
    const handleRemoveAnswer = (index: number) =>
        setAnswers(answers.filter((_, i) => i !== index));
    const handleAnswerChange = (value: string, index: number) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    const handleSave = () => {
        const updatedQuestion = {
            ...question,
            title,
            points,
            text: questionText,
            correctAnswers: answers,
        };

        dispatch(updateQuestion(updatedQuestion)); // Dispatch to Redux
        console.log("Saved Question:", updatedQuestion);
        navigate(-1); // Navigate back
    };

    return (
        <div className="container mt-5">
            <h1>Fill in the Blank Question Editor</h1>
            <div className="mb-3">
                <label>Title</label>
                <input
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Points</label>
                <input
                    className="form-control"
                    type="number"
                    value={points}
                    onChange={(e) => setPoints(Number(e.target.value))}
                />
            </div>
            <div className="mb-3">
                <label>Question</label>
                <textarea
                    className="form-control"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Possible Answers</label>
                {answers.map((answer, index) => (
                    <div key={index} className="input-group mb-2">
                        <input
                            className="form-control"
                            value={answer}
                            onChange={(e) => handleAnswerChange(e.target.value, index)}
                        />
                        <button
                            className="btn btn-danger"
                            onClick={() => handleRemoveAnswer(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button className="btn btn-secondary" onClick={handleAddAnswer}>
                    Add Answer
                </button>
            </div>
            <div>
                <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>
                    Cancel
                </button>
                <button className="btn btn-primary" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
}
