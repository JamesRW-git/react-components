import React from 'react';
import ReactDOM from 'react-dom';
import {faker} from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Are you sure you want to do this?</h4>
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:05PM"
                    commentText="Hey look at this!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:03PM"
                    commentText="Second!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 8:00AM"
                    commentText="Reaction!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="James"
                    timeAgo="Yesterday at 7:42PM"
                    commentText="Hmm...Reactive"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));