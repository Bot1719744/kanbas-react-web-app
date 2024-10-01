import { FaPlus, FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
    return (
        <div>

            <div className="d-flex justify-content-between align-items-center mb-3" style={{ marginLeft: "100px" }}>

                <div className="d-flex align-items-center">
                    <FaSearch className="me-2" />
                    <input
                        id="wd-search-assignment"
                        className="form-control"
                        placeholder="Search for Assignments"
                        style={{ maxWidth: "250px" }}
                    />
                </div>


                <div className="d-flex">

                    <button
                        id="wd-add-assignment-group"
                        className="btn btn-secondary me-2 d-flex align-items-center"
                    >
                        <FaPlus className="me-1" /> Group
                    </button>

                    <button
                        id="wd-add-assignment"
                        className="btn btn-danger d-flex align-items-center"
                    >
                        <FaPlus className="me-1" /> Assignment
                    </button>
                </div>
            </div>

            <ul id="wd-assignments" className="list-group rounded-0" style={{ marginLeft: "100px"}}>
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS 40% of Total
                        <button className="btn btn-light ms-2">
                            <FaPlus />
                        </button>
                    </div>

                    <ul className="wd-assignment-list list-group rounded-0">

                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <a
                                className="wd-assignment-link text-decoration-none"
                                href="#/Kanbas/Courses/1234/Assignments/123"
                            >
                                A1 - ENV + HTML
                            </a>
                            <h6 className="text-muted mt-1">
                                Multiple Modules | Not available until May 6 at 12:00am |
                            </h6>
                            <h6 className="text-muted">
                                Due May 13 at 11:59pm | 100 pts
                            </h6>
                        </li>


                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <a
                                className="wd-assignment-link text-decoration-none"
                                href="#/Kanbas/Courses/1234/Assignments/124"
                            >
                                A2 - CSS + BOOTSTRAP
                            </a>
                            <h6 className="text-muted mt-1">
                                Multiple Modules | Not available until May 13 at 12:00am |
                            </h6>
                            <h6 className="text-muted">
                                Due May 20 at 11:59pm | 100 pts
                            </h6>
                        </li>


                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <a
                                className="wd-assignment-link text-decoration-none"
                                href="#/Kanbas/Courses/1234/Assignments/125"
                            >
                                A3 - JAVASCRIPT + REACT
                            </a>
                            <h6 className="text-muted mt-1">
                                Multiple Modules | Not available until May 20 at 12:00am |
                            </h6>
                            <h6 className="text-muted">
                                Due May 27 at 11:59pm | 100 pts
                            </h6>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
