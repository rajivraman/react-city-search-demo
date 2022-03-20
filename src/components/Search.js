import React, {useState, useContext, useRef} from "react";
import { ResultsContext } from "../App";

const Search = () => {
    const { setResults } = useContext(ResultsContext);
    const [, setSearchTerm] = useState("");

    const debounce = (func, timeout = 1000) => {
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    };

    const debouncedSearch = useRef(
        debounce(async (term) => {
            if (term && term.length >= 3) {
                let response = await fetch(`/AutoCompleteCity?callback=?&filter=US,CA&q=${term}`);
                let data = await response.text();
                // JSON-P hacking...
                data = JSON.parse(data.substring(data.indexOf("(") + 1, data.lastIndexOf(")")));
                setResults(data);
            } else {
                setResults([]);
            }
        })
    ).current;

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        debouncedSearch(event.target.value);
    };

    return <div>
        Place: <input type="text" onChange={handleChange}/>
    </div>;
}

export default Search;