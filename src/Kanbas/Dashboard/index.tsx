import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">

                <div className="wd-dashboard-course">
                    <img src="images/reactjs.jpg" width={200} alt={"1234"}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to={`/Kanbas/Courses/1234/Home`}>
                            CS1234 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                    </div>
                </div>


                <div className="wd-dashboard-course">
                    <img src="images/CareerDesign.PNG" width={200} alt={"CareerDesign"}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1235/Home">
                            Career Design
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Career Design Course
                        </p>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="images/CS5010.PNG" width={200} alt={"CS5010"}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/5010/Home">
                            CS5010
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Programming Design Paradigm
                        </p>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="images/CS5330.PNG" width={200} alt={"CS5330"}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/5330/Home">
                            CS5330
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Pattern Recognition & Computer Vision
                        </p>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="images/CS5610.png" width={200} alt={"CS5610"}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/5610/Home">
                            CS5610
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Web Development
                        </p>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="images/CS5800.PNG" width={200} alt={"CS5800"}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/5800/Home">
                            CS5800
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Algorithms
                        </p>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="images/CS6140.PNG" width={200} alt={"CS6140"}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/6140/Home">
                            CS6140
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Machine Learning
                        </p>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="images/F1-Orientation.PNG" width={200} alt={"F1-Orientation"}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1111/Home">
                            F1-Orientation
                        </Link>
                        <p className="wd-dashboard-course-title">
                            F1-Orientation Course
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

