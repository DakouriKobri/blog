import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  async function fetchComments() {
    const response = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(response.data);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  if (comments) {
    const renderedComments = comments.map((comment) => (
      <li key={comment.id}>{comment.content}</li>
    ));
    return <ul>{renderedComments}</ul>;
  } else {
    return null;
  }
}
