import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import KanbasNavigation from "../../Navigation"; // Import Bootstrap

export default function AssignmentEditor() {
    return (
        <div>

            <KanbasNavigation />

            <div id="wd-assignments-editor" className="container mt-5">
                <h2>CS1234</h2>

                <div className="row mb-4">
                    {/* Assignment Name */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                        <input id="wd-name" className="form-control" value="A1 - ENV + HTML"/>
                    </div>

                    {/* Points */}
                    <div className="col-md-6 mb-3">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                        <input id="wd-points" className="form-control" value={100}/>
                    </div>
                </div>

                {/* Assignment Description */}
                <div className="row mb-4">
                    <div className="col-12">
                        <label htmlFor="wd-description" className="form-label">Description</label>
                        <textarea id="wd-description" className="form-control">
                        The assignment is available online. Submit a link to the landing page.
                    </textarea>
                    </div>
                </div>

                {/* Assignment Group, Display Grade As, Submission Type */}
                <div className="row mb-4">
                    <div className="col-md-4">
                        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                        <select id="wd-group" className="form-control">
                            <option value="Assignment1">Assignment1</option>
                            <option value="Assignment2">Assignment2</option>
                            <option value="Assignment3">Assignment3</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                        <select id="wd-display-grade-as" className="form-control">
                            <option value="Percentage">Percentage</option>
                            <option value="Score">Score</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                        <select id="wd-submission-type" className="form-control">
                            <option value="Online">Online</option>
                            <option value="Inclass">Inclass</option>
                        </select>
                    </div>
                </div>

                {/* Online Entry Options */}
                <div className="row mb-4">
                    <div className="col-md-12">
                        <label className="form-label">Online Entry Options</label><br/>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-text-entry"/>
                            <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-website-url"/>
                            <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-media-recordings"/>
                            <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-student-annotation"/>
                            <label className="form-check-label" htmlFor="wd-student-annotation">Student
                                Annotation</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-file-upload"/>
                            <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                        </div>
                    </div>
                </div>

                {/* Assign To, Due Date, Availability */}
                <div className="row mb-4">
                    <div className="col-md-4">
                        <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                        <input id="wd-assign-to" className="form-control" value="Everyone"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                        <input type="date" id="wd-due-date" className="form-control" value="2024-05-13"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="wd-available-from" className="form-label">Available from</label>
                        <input type="date" id="wd-available-from" className="form-control" value="2024-05-06"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="wd-available-until" className="form-label">Until</label>
                        <input type="date" id="wd-available-until" className="form-control" value="2024-05-20"/>
                    </div>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-end">
                    <button className="btn btn-secondary me-2">Cancel</button>
                    <button className="btn btn-success">Save</button>
                </div>
            </div>
        </div>

    );
}
