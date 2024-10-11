import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Route, Routes, useParams, useLocation } from "react-router";
import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import KanbasNavigation from "../Navigation";
import { courses } from "../Database";

export default function Courses() {

    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();

    return (
        <div>
            <KanbasNavigation />

            <div id="wd-courses">
                <h2 className="text-danger" style={{ marginLeft: "140px" }}>
                    <FaAlignJustify className="me-4 fs-4 mb-1" />
                    {course && course.name} &gt; {pathname.split("/")[4]}
                </h2>
                <hr />

                <div style={{ display: "flex" }}>
                    <div style={{ width: "300px", marginRight: "20px" }}>
                        <CoursesNavigation />
                    </div>

                    <div style={{ flexGrow: 1}}>
                        <Routes>
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                            <Route path="People" element={<PeopleTable />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}
