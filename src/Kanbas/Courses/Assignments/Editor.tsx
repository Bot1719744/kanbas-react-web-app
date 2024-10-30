import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer"; // Adjust path as needed

type OnlineEntryOptionsKey = 'textEntry' | 'websiteURL' | 'mediaRecordings' | 'studentAnnotation' | 'fileUploads';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Access global assignments state
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const assignment = assignments.find((assign: any) => assign.course === cid && assign._id === aid);

    // State for form fields
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(100);
    const [submissionType, setSubmissionType] = useState("Online");
    const [onlineEntryOptions, setOnlineEntryOptions] = useState({
        textEntry: false,
        websiteURL: false,
        mediaRecordings: false,
        studentAnnotation: false,
        fileUploads: false,
    });
    const [dueDate, setDueDate] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [availableUntil, setAvailableUntil] = useState("");
    const [assignTo, setAssignTo] = useState("Everyone");

    useEffect(() => {
        if (assignment) {
            setTitle(assignment.title);
            setDescription(assignment.description);
            setPoints(assignment.points);
            setSubmissionType(assignment.submissionType);
            setOnlineEntryOptions(assignment.onlineEntryOptions);
            setDueDate(assignment.dueDate);
            setAvailableFrom(assignment.availableFrom);
            setAvailableUntil(assignment.availableUntil);
            setAssignTo(assignment.assignTo);
        }
    }, [assignment]);

    const handleOptionChange = (option: OnlineEntryOptionsKey) => {
        setOnlineEntryOptions((prev) => ({
            ...prev,
            [option]: !prev[option],
        }));
    };

    const handleSave = () => {
        const newAssignment = {
            _id: aid || Date.now().toString(),
            course: cid,
            title,
            description,
            points,
            submissionType,
            onlineEntryOptions,
            assignTo,
            dueDate,
            availableFrom,
            availableUntil,
        };

        if (assignment) {
            dispatch(updateAssignment(newAssignment));
        } else {
            dispatch(addAssignment(newAssignment));
        }

        navigate(`/Kanbas/Courses/${cid}/Assignments/`);
    };

    const handleCancel = () => navigate(`/Kanbas/Courses/${cid}/Assignments/`);

    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col-md-6 mb-3">
                    <label htmlFor="title" className="form-label">Assignment Name</label>
                    <input
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="points" className="form-label">Points</label>
                    <input
                        id="points"
                        className="form-control"
                        type="number"
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))}
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        className="form-control"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>

            <div className="row mb-4 border p-3">
                <div className="col-md-4">
                    <label htmlFor="submissionType" className="form-label">Submission Type</label>
                    <select
                        id="submissionType"
                        className="form-control"
                        value={submissionType}
                        onChange={(e) => setSubmissionType(e.target.value)}
                    >
                        <option value="Online">Online</option>
                        <option value="Inclass">Inclass</option>
                    </select>
                </div>

                <div className="col-md-12 p-3">
                    <label className="form-label font-weight-bold">Online Entry Options</label>
                    {Object.keys(onlineEntryOptions).map((option) => (
                        <div className="form-check" key={option}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id={option}
                                checked={onlineEntryOptions[option as OnlineEntryOptionsKey]}
                                onChange={() => handleOptionChange(option as OnlineEntryOptionsKey)}
                            />
                            <label className="form-check-label" htmlFor={option}>
                                {option.replace(/([A-Z])/g, ' $1')}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="row mb-4 border p-3">
                <div className="col-md-12">
                    <label htmlFor="assignTo" className="form-label">Assign To</label>
                    <input
                        id="assignTo"
                        className="form-control"
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="dueDate" className="form-label">Due Date</label>
                    <input
                        type="date"
                        id="dueDate"
                        className="form-control"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="availableFrom" className="form-label">Available From</label>
                    <input
                        type="date"
                        id="availableFrom"
                        className="form-control"
                        value={availableFrom}
                        onChange={(e) => setAvailableFrom(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="availableUntil" className="form-label">Available Until</label>
                    <input
                        type="date"
                        id="availableUntil"
                        className="form-control"
                        value={availableUntil}
                        onChange={(e) => setAvailableUntil(e.target.value)}
                    />
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <button onClick={handleCancel} className="btn btn-secondary me-2">Cancel</button>
                <button onClick={handleSave} className="btn btn-success">Save</button>
            </div>
        </div>
    );
}
