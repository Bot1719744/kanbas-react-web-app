import { useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    const { cid } = useParams(); // Get course ID from route params
    const modules = db.modules; // Fetch modules from the database

    return (
        <div>
            {/* Modules Controls at the top */}
            <ModulesControls /><br /><br /><br /><br />

            {/* List of Modules */}
            <ul id="wd-modules" className="list-group rounded-0" style={{ marginLeft: "100px", marginRight: "100px" }}>
                {modules
                    .filter((module) => module.course === cid) // Filter modules by course ID
                    .map((module) => (
                        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {module.name} {/* Module Name */}
                                <ModuleControlButtons /> {/* Module Control Buttons */}
                            </div>

                            {/* List of Lessons within each Module */}
                            {module.lessons && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson) => (
                                        <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" />
                                            {lesson.name} {/* Lesson Name */}
                                            <LessonControlButtons /> {/* Lesson Control Buttons */}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
