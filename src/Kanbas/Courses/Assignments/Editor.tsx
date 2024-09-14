import React from "react";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML"/><br/><br/>
            <textarea id="wd-description">
            The assignment is available online Submit a link to the landing page of
            </textarea>
            <br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>

                <tr>
                    <label htmlFor="wd-group"> Assignment Group </label><br/>
                    <select id="wd-group">
                        <option value="Assignment1">Assignment1</option>
                        <option value="Assignment2">Assignment2</option>
                        <option value="Assignment3">Assignment3</option>
                    </select>
                </tr>

                <tr>
                    <label htmlFor="wd-display-grade-ase"> Display Grade as </label><br/>
                    <select id="wd-display-grade-as">
                        <option value="Percentage">Percentage</option>
                        <option value="Score">Score</option>
                    </select>
                </tr>

                <tr>
                    <label htmlFor="wd-submission-type"> Submission Type </label><br/>
                    <select id="wd-submission-type">
                        <option value="Online">Online</option>
                        <option value="Inclass">Inclass</option>
                    </select>
                </tr>

                <tr>
                    <label>Online Entry Options</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
                    <label htmlFor="wd-website-url">Website URL</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                    <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
                    <label htmlFor="wd-file-upload">File Uploads</label>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                    <td>
                        <input id="wd-points" value={"Everyone"}/>
                    </td>
                </tr>

                <label htmlFor="wd-due-date"> Due </label>
                <input type="date"
                       id="wd-text-fields-dob"
                       value="2024-05-13"/><br/>

                <label htmlFor="wd-available-from"> Available from </label>
                <input type="date"
                       id="wd-text-fields-dob"
                       value="2024-05-06"/><br/>
                <label htmlFor="wd-available-until"> Until </label>
                <input type="date"
                       id="wd-text-fields-dob"
                       value="2024-05-20"/><br/>

            </table>

            <button>Cancel</button>
            <button>Save</button>
        </div>
    );
}
