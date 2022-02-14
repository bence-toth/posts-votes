const usePosts = () => {
  // TODO load posts from https://jsonplaceholder.typicode.com/posts
  const posts = [];
  const arePostsLoading = false;

  return { posts, arePostsLoading };
};

const usePostsWithVotes = () => {
  const { posts, arePostsLoading } = usePosts();

  // TODO accociate post with their votes
  const postsWithVotes = posts.map((post) => ({
    ...post,
    votes: 0,
  }));

  const voteUp = (postId) => {
    // TODO increment votes for a post
  };

  const voteDown = (postId) => {
    // TODO decrement votes for a post
  };

  return { posts: postsWithVotes, arePostsLoading, voteUp, voteDown };
};

export default usePostsWithVotes;
