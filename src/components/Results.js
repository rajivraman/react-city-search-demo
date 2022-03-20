import React from "react";
import { ResultsContext } from "../App";

const Results = () => {
    const context = React.useContext(ResultsContext);
    return <div className="results">
        {context.results.map((item, i) => 
            <div className="result" key={item}>{item}</div>
        )}
    </div>;
}

export default Results;