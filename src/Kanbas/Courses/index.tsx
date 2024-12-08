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
import Quizzes from "./Quizzes";
import QuizzeEditor from "./Quizzes/QuizEditor";
import QuizDetails from "./Quizzes/QuizDetails";
import QuizQuestionsEditor from "./Quizzes/QuestionEditor/QuizQuestionsEditor";
import MultipleChoiceEditor from "./Quizzes/QuestionEditor/MultipleChoiceEditor";
import TrueFalseEditor from "./Quizzes/QuestionEditor/TrueFalseEditor";
import FillInBlankEditor from "./Quizzes/QuestionEditor/FillInBlankEditor";
import QuizStartScreen from "./Quizzes/QuizStart";
import QuizPreview from "./Quizzes/Preview";

export default function Courses({ courses }: { courses: any[]; }) {

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
                            <Route path="Quizzes" element={<Quizzes/>} />
                            <Route path="Quizzes/:qid" element={<QuizzeEditor/>} />
                            <Route path="Quizzes/New/:qid" element={<QuizDetails />} />
                            <Route path="Quizzes/:qid/Questions" element={<QuizQuestionsEditor />} />
                            <Route path="Quizzes/:qid/Questions/:questionId/MultipleChoice" element={<MultipleChoiceEditor />} />
                            <Route path="Quizzes/:qid/Questions/:questionId/TrueFalse" element={<TrueFalseEditor />} />
                            <Route path="Quizzes/:qid/Questions/:questionId/FillInBlank" element={<FillInBlankEditor />} />
                            <Route path="Quizzes/:qid/Start" element={<QuizStartScreen />} />
                            <Route path="Quizzes/:qid/Preview" element={<QuizPreview />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}
