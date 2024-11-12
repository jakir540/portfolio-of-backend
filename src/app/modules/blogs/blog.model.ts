import { Schema, model, Types } from "mongoose";

// Update the schema to match the TBlogPost interface
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImageUrl: {
      type: String,
      required: true,
    },
    author: {
      type: Types.ObjectId, // Reference to the User model
      ref: "User", // Name of the User model
      required: true,
    },
    tags: [
      {
        id: String,
        name: String,
        slug: String,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    publishedAt: {
      type: Date,
      required: true,
    },
    readTime: {
      type: Number,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    seo: {
      title: String,
      description: String,
      keywords: [String],
    },
    comments: [
      {
        id: String,
        authorName: String,
        authorEmail: String,
        content: String,
        createdAt: Date,
        replies: [
          {
            id: String,
            authorName: String,
            content: String,
            createdAt: Date,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Blog = model("Blog", blogSchema);
export default Blog;
