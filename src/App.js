import Post from "./Post";

import usePosts from "./usePosts";

import "./App.css";

const App = () => {
  const { posts, arePostsLoading, voteUp, voteDown } = usePosts();

  // TODO The five most voted posts, sorted by votes
  const topPosts = posts;

  if (arePostsLoading) {
    return (
      <div className="app">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <section>
        <h2>Posts</h2>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            userId={post.userId}
            votes={post.votes}
            onVoteUp={() => voteUp(post.id)}
            onVoteDown={() => voteDown(post.id)}
          >
            {post.body}
          </Post>
        ))}
      </section>
      <section>
        <h2>Top posts</h2>
        <ul>
          {topPosts.map((post) => (
            <li>{`${post.title} (${post.votes})`}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
