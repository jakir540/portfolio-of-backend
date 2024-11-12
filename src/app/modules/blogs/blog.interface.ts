// blog.interface.ts

import mongoose, { Types } from "mongoose";

export type Tag = {
  id: string; // Unique identifier for the tag
  name: string; // Display name of the tag
  slug: string; // URL-friendly version of the tag name
};

export type Comment = {
  id: string; // Unique identifier for the comment
  authorName: string; // Name of the person who commented
  authorEmail?: string; // Email of the commenter (optional, for reply notifications)
  content: string; // Content of the comment
  createdAt: Date; // Date the comment was posted
  replies?: Comment[]; // Nested replies to the comment
};

export type TBlogPost = {
  id: string; // Unique identifier for the blog post
  title: string; // Title of the blog post
  slug: string; // URL-friendly version of the title
  excerpt: string; // Short summary or preview of the content
  content: string; // Main content of the blog post (could be HTML or Markdown)
  coverImageUrl: string; // URL of the main cover image for the post
  author: Types.ObjectId; // Author information
  tags: Tag[]; // List of tags for the post
  createdAt: Date; // Date of post creation
  updatedAt: Date; // Date of last update
  publishedAt: Date; // Date the post was published
  readTime: number; // Estimated read time in minutes
  featured: boolean; // Whether the post is featured on the blog page
  views: number; // Number of views (for analytics)
  likes: number; // Number of likes (for user engagement)
  seo: {
    // SEO-related information
    title: string; // SEO title (can be different from the blog title)
    description: string; // SEO description
    keywords: string[]; // List of keywords for SEO
  };
  comments: Comment[]; // List of comments on the blog post
};
