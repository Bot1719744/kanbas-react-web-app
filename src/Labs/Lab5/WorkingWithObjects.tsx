import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const [module, setModule] = useState({
        id: "CS101",
        name: "Introduction to Computer Science",
        description: "Learn the basics of computer science",
        course: "CS",
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>

            {/* Assignment Section */}
            <h4>Assignment</h4>
            <a id="wd-retrieve-assignment" className="btn btn-primary me-2" href={`${ASSIGNMENT_API_URL}`}>
                Get Assignment
            </a>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${ASSIGNMENT_API_URL}/title`}>
                Get Assignment Title
            </a>
            <hr />

            <h4>Modify Assignment Properties</h4>
            <input
                className="form-control w-75 mb-2"
                id="wd-assignment-title"
                defaultValue={assignment.title}
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            />
            <a
                id="wd-update-assignment-title"
                className="btn btn-primary mb-2"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
            >
                Update Title
            </a>

            <input
                type="number"
                className="form-control w-75 mb-2"
                id="wd-assignment-score"
                defaultValue={assignment.score}
                onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
            />
            <a
                id="wd-update-assignment-score"
                className="btn btn-primary mb-2"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
            >
                Update Score
            </a>

            <div className="form-check mb-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-assignment-completed"
                    checked={assignment.completed}
                    onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
                    style={{ transform: "scale(1.5)" }} // Makes the checkbox larger
                />
                <label className="form-check-label ms-2 fw-bold" htmlFor="wd-assignment-completed">
                    Assignment Completed
                </label>
            </div>
            <a
                id="wd-update-assignment-completed"
                className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
            >
                Update Completed
            </a>
            <hr />

            {/* Module Section */}
            <h4>Module</h4>
            <a id="wd-retrieve-module" className="btn btn-primary me-2" href={`${MODULE_API_URL}`}>
                Get Module
            </a>
            <a id="wd-retrieve-module-name" className="btn btn-primary" href={`${MODULE_API_URL}/name`}>
                Get Module Name
            </a>
            <hr />

            <h4>Modify Module Properties</h4>
            <input
                className="form-control w-75 mb-2"
                id="wd-module-name"
                defaultValue={module.name}
                onChange={(e) => setModule({ ...module, name: e.target.value })}
            />
            <a
                id="wd-update-module-name"
                className="btn btn-primary mb-2"
                href={`${MODULE_API_URL}/name/${module.name}`}
            >
                Update Name
            </a>

            <input
                className="form-control w-75 mb-2"
                id="wd-module-description"
                defaultValue={module.description}
                onChange={(e) => setModule({ ...module, description: e.target.value })}
            />
            <a
                id="wd-update-module-description"
                className="btn btn-primary"
                href={`${MODULE_API_URL}/description/${module.description}`}
            >
                Update Description
            </a>
            <hr />
        </div>
    );
}
