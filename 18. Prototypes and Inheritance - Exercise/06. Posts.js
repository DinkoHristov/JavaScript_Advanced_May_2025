function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let resultString = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;

            if (this.comments.length == 0) {
                return resultString;
            }

            resultString += '\nComments:\n';
            resultString += this.comments.map(c => ` * ${c}`).join('\n');

            return resultString;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;

            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());
// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let blogPost = new classes.BlogPost("Blog Post", "Blog Post Content", 10);

blogPost.view();
blogPost.view();

console.log(blogPost.toString());
// Post: Blog Post
// Content: Blog Post Content
// Views: 12