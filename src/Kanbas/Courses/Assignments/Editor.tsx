import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as db from "../../Database"; // Mock database for assignments

// Define the keys of the onlineEntryOptions object
type OnlineEntryOptionsKey = 'textEntry' | 'websiteURL' | 'mediaRecordings' | 'studentAnnotation' | 'fileUploads';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;
    const assignment = assignments.find((assign) => assign.course === cid && assign._id === aid);

    // Initialize state with default values from the JSON file
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState(100);
    const [submissionType, setSubmissionType] = useState("Online");
    const [onlineEntryOptions, setOnlineEntryOptions] = useState({
        textEntry: false,
        websiteURL: false,
        mediaRecordings: false,
        studentAnnotation: false,
        fileUploads: false
    });
    const [dueDate, setDueDate] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [availableUntil, setAvailableUntil] = useState("");
    const [assignTo, setAssignTo] = useState("Everyone");

    // Populate state with assignment data on component load
    useEffect(() => {
        if (assignment) {
            setTitle(assignment.title || "");
            setDescription(assignment.description || "");
            setPoints(assignment.points || 100);
            setSubmissionType(assignment.submissionType || "Online");
            setOnlineEntryOptions(assignment.onlineEntryOptions || {
                textEntry: false,
                websiteURL: false,
                mediaRecordings: false,
                studentAnnotation: false,
                fileUploads: false
            });
            setDueDate(assignment.dueDate || "");
            setAvailableFrom(assignment.availableFrom || "");
            setAvailableUntil(assignment.availableUntil || "");
            setAssignTo(assignment.assignTo || "Everyone");
        }
    }, [assignment]);

    if (!assignment) {
        return <div>Loading...</div>;
    }

    // Corrected handleOptionChange function with explicit typing
    const handleOptionChange = (option: OnlineEntryOptionsKey) => {
        setOnlineEntryOptions({
            ...onlineEntryOptions,
            [option]: !onlineEntryOptions[option]  // Ensure TypeScript knows that `option` is one of the valid keys
        });
    };

    return (
        <div className="container mt-5">
            {/* Assignment Name and Points */}
            <div className="row mb-4">
                <div className="col-md-6 mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input
                        id="wd-name"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                    <input
                        id="wd-points"
                        className="form-control"
                        value={points}
                        type="number"
                        onChange={(e) => setPoints(Number(e.target.value))}
                    />
                </div>
            </div>

            {/* Assignment Description */}
            <div className="row mb-4">
                <div className="col-12">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>

            {/* Submission Type and Online Entry Options */}
            <div className="row mb-4 border p-3">
                <div className="col-md-4">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    <select
                        id="wd-submission-type"
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
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="wd-text-entry"
                            checked={onlineEntryOptions.textEntry}
                            onChange={() => handleOptionChange("textEntry")}
                        />
                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="wd-website-url"
                            checked={onlineEntryOptions.websiteURL}
                            onChange={() => handleOptionChange("websiteURL")}
                        />
                        <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="wd-media-recordings"
                            checked={onlineEntryOptions.mediaRecordings}
                            onChange={() => handleOptionChange("mediaRecordings")}
                        />
                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="wd-student-annotation"
                            checked={onlineEntryOptions.studentAnnotation}
                            onChange={() => handleOptionChange("studentAnnotation")}
                        />
                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="wd-file-upload"
                            checked={onlineEntryOptions.fileUploads}
                            onChange={() => handleOptionChange("fileUploads")}
                        />
                        <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                    </div>
                </div>
            </div>

            {/* Assign To, Due Date, Available From, and Available Until */}
            <div className="row mb-4 border p-3">
                <div className="col-md-12">
                    <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
                    <input
                        id="wd-assign-to"
                        className="form-control"
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                    <input
                        type="date"
                        id="wd-due-date"
                        className="form-control"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-available-from" className="form-label">Available From</label>
                    <input
                        type="date"
                        id="wd-available-from"
                        className="form-control"
                        value={availableFrom}
                        onChange={(e) => setAvailableFrom(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-available-until" className="form-label">Available Until</label>
                    <input
                        type="date"
                        id="wd-available-until"
                        className="form-control"
                        value={availableUntil}
                        onChange={(e) => setAvailableUntil(e.target.value)}
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-end">
                <Link to={`/courses/${cid}/assignments`} className="btn btn-secondary me-2">Cancel</Link>
                <Link to={`/courses/${cid}/assignments`} className="btn btn-success">Save</Link>
            </div>
        </div>
    );
}
