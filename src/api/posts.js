import { posts } from '.'; //index를 가져옴

export function getPosts(params) {
  // return posts;
  return posts.get('/', { params }); //json-server url
}

export function getPostById(id) {
  return posts.get(id);
}

export function createPost(data) {
  return posts.post('', data);
}

export function updatePost(id, data) {
  return posts.put(`/${id}`, data);
}

export function deletePost(id) {
  return posts.delete(`/${id}`);
}
