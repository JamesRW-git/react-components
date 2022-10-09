import React from 'react';
import ReactDOM from 'react-dom';
import {faker} from "@faker-js/faker";
import CommentDetail from "./CommentDetail";


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:05PM"
                commentText="Hey look at this!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:03PM"
                commentText="Second!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 8:00AM"
                commentText="Reaction!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="James"
                timeAgo="Yesterday at 7:42PM"
                commentText="Hmm...Reactive"
                avatar={faker.image.avatar()}
            />
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));