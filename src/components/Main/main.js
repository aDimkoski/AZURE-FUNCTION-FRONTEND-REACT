import React from 'react';

const main = (props) => {
    return (
        <div className={"container"}>
            <h4>Please upload your csv file that contains random numbers. Every number must be in new row.<br/>
                The program will sort them out and provide new file to download them sorted.</h4>
            <form id="my_form">
                <input type="file" id="file" name="file" multiple/><br/>
                    <button type="button" name="submit_1" id="submit_1" className="btn btn-success mt-5">Send</button>
            </form>

            <div id="result">
                The processing time in millis is: <h4 id="timer"></h4>
                <p></p>
            </div>
        </div>
    )
}

export default main;