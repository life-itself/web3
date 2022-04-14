import posts from "../config/posts.json";

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug && !post.isSection);
}
