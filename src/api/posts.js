import posts from './posts.json'

export function getAllPosts() {
    return Promise.resolve(posts);
}
