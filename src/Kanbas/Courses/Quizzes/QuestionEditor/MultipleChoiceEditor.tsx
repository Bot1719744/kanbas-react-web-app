import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuestion } from "./reducer";

export default function MultipleChoiceEditor() {
    const { questionId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const question = useSelector((state: any) =>
        state.questionsReducer.questions.find((q: any) => q._id === questionId)
    );

    const [title, setTitle] = useState<string>(question?.title || "");
    const [points, setPoints] = useState<number>(question?.points || 0);
    const [questionText, setQuestionText] = useState<string>(question?.text || "");
    const [choices, setChoices] = useState<string[]>(question?.choices || [""]);
    const [correctAnswer, setCorrectAnswer] = useState<number>(question?.correctAnswer || 0);

    const handleAddChoice = () => setChoices([...choices, ""]);
    const handleRemoveChoice = (index: number) => {
        const updatedChoices = choices.filter((_: string, i: number) => i !== index);
        setChoices(updatedChoices);
        if (correctAnswer === index) setCorrectAnswer(0);
    };
    const handleChoiceChange = (value: string, index: number) => {
        const updatedChoices = [...choices];
        updatedChoices[index] = value;
        setChoices(updatedChoices);
    };

    const handleSave = () => {
        const updatedQuestion = {
            ...question,
            title,
            points,
            text: questionText,
            choices,
            correctAnswer,
        };

        dispatch(updateQuestion(updatedQuestion)); // Dispatch to Redux
        console.log("Saved Question:", updatedQuestion);
        navigate(-1); // Navigate back
    };

    return (
        <div className="container mt-5">
            <h1>Multiple Choice Question Editor</h1>
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
                <label>Choices</label>
                {choices.map((choice: string, index: number) => (
                    <div key={index} className="input-group mb-2">
                        <input
                            className="form-control"
                            value={choice}
                            onChange={(e) => handleChoiceChange(e.target.value, index)}
                        />
                        <input
                            type="radio"
                            name="correctAnswer"
                            checked={correctAnswer === index}
                            onChange={() => setCorrectAnswer(index)}
                        />
                        <button
                            className="btn btn-danger"
                            onClick={() => handleRemoveChoice(index)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button className="btn btn-secondary" onClick={handleAddChoice}>
                    Add Choice
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
