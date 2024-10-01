import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Route, Routes } from "react-router";
import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import KanbasNavigation from "../Navigation";

export default function Courses() {
    return (
        <div>
            <KanbasNavigation />

            <div id="wd-courses">
                <h2 className="text-danger" style={{ marginLeft: "140px" }}>
                    <FaAlignJustify className="me-4 fs-4 mb-1" />
                    Course 1234
                </h2>
                <hr />

                {/* Container for CoursesNavigation and Routes */}
                <div style={{ display: "flex" }}>
                    {/* Left: Courses Navigation */}
                    <div style={{ width: "300px", marginRight: "20px" }}>
                        <CoursesNavigation />
                    </div>

                    {/* Right: Routes Content */}
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
