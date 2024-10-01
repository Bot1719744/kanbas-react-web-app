import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
    return (
        <div>
            {/* Main Assignment Editor */}
            <div id="wd-assignments-editor" className="container mt-5">
                <h2>CS1234</h2>

                {/* Assignment Name and Points */}
                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                        <input id="wd-name" className="form-control" value="A1 - ENV + HTML"/>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                        <input id="wd-points" className="form-control" value={100} type="number"/>
                    </div>
                </div>

                {/* Assignment Description */}
                <div className="row mb-4">
                    <div className="col-12">
                        <label htmlFor="wd-description" className="form-label">Description</label>
                        <textarea id="wd-description" className="form-control" rows={4}
                                  defaultValue="The assignment is available online. Submit a link to the landing page."/>
                    </div>
                </div>

                {/* Submission Type and Online Entry Options in a box */}
                <div className="row mb-4 border p-3">

                    <div className="col-md-4">
                        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                        <select id="wd-submission-type" className="form-control">
                            <option value="Online">Online</option>
                            <option value="Inclass">Inclass</option>
                        </select>
                    </div>

                    {/* Online Entry Options */}
                    <div className="col-md-12 p-3">
                        <label className="form-label" style={{ fontWeight: 'bold' }}>Online Entry Options</label>
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
                            <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-file-upload"/>
                            <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                        </div>
                    </div>
                </div>

                {/* Assign To, Due Date, Available From, and Available Until in a box */}
                <div className="row mb-4 border p-3">
                    <div className="col-md-12">
                        <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
                        <input id="wd-assign-to" className="form-control" value="Everyone"/>
                    </div>
                    <div className="col-md-12 ">
                        <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                        <input type="date" id="wd-due-date" className="form-control" value="2024-05-13"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wd-available-from" className="form-label">Available From</label>
                        <input type="date" id="wd-available-from" className="form-control" value="2024-05-06"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="wd-available-until" className="form-label">Available Until</label>
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
