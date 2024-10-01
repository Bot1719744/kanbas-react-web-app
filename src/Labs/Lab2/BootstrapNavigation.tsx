export default function BootstrapNavigation() {
    return (
        <div id="wd-css-navigating-with-tabs">
            <h2>Tabs</h2>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="https://flic.kr/p/2pQ4ZAT">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://flic.kr/p/2pQ4ZAT">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://flic.kr/p/2pQ4ZAT">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="https://flic.kr/p/2pQ4ZAT">Disabled</a>
                </li>
            </ul>

            <div id="wd-css-navigating-with-cards">
                <h2>Cards</h2>
                <div className="card"
                     style={{width: "18rem"}}>
                    <img src="images/stacked.jpg"
                         className="card-img-top" alt={"stacked"}/>
                    <div className="card-body">
                        <h5 className="card-title">
                            Stacking Starship
                        </h5>
                        <p className="card-text">
                            Stacking the most powerful rocket in history. Mars or bust!
                        </p>
                        <a href="https://www.flickr.com/photos/78968367@N06/53708869123/" className="btn btn-primary">
                            Boldly Go
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
