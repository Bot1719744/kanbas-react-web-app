import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuestion } from "./reducer";

export default function TrueFalseEditor() {
    const { questionId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const question = useSelector((state: any) =>
        state.questionsReducer.questions.find((q: any) => q._id === questionId)
    );

    const [title, setTitle] = useState<string>(question?.title || "");
    const [points, setPoints] = useState<number>(question?.points || 0);
    const [questionText, setQuestionText] = useState<string>(question?.text || "");
    const [isTrue, setIsTrue] = useState<boolean>(question?.correctAnswer || true);

    const handleSave = () => {
        const updatedQuestion = {
            ...question,
            title,
            points,
            text: questionText,
            correctAnswer: isTrue,
        };

        dispatch(updateQuestion(updatedQuestion)); // Dispatch to Redux
        console.log("Saved Question:", updatedQuestion);
        navigate(-1); // Navigate back
    };

    return (
        <div className="container mt-5">
            <h1>True/False Question Editor</h1>
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
                <label>Answer</label>
                <div>
                    <input
                        type="radio"
                        name="trueFalse"
                        checked={isTrue}
                        onChange={() => setIsTrue(true)}
                    />{" "}
                    True
                </div>
                <div>
                    <input
                        type="radio"
                        name="trueFalse"
                        checked={!isTrue}
                        onChange={() => setIsTrue(false)}
                    />{" "}
                    False
                </div>
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
