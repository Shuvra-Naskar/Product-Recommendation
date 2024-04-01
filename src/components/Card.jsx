import React from "react";

const Card = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://th.bing.com/th?id=OIP.3QA2-HstFHfdSN2M6IaVlQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;
