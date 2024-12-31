"use client"
import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');

  const handleAddComment = () => {
    const newComment: Comment = {
      id: comments.length + 1,
      text: commentText,
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <textarea
        className="w-full border rounded p-2 mb-4"
        rows={4}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment"
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleAddComment}
      >
        Add Comment
      </button>
      <div className="mt-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b py-2">
            {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;