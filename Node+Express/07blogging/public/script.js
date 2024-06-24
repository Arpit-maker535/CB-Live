const blogForm = document.getElementById("blog-form");
const postsList = document.getElementById("posts-list");

const fetchPosts = async () => {
  const response = await fetch("/api/blog", {
    headers: {
      Authorization: "Bearer mysecrettoken",
    },
  });
  const posts = await response.json();
  postsList.innerHTML = posts
    .map(
      (post) => `
    <div class="post">
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <div class="actions">
        <button onclick="editPost(${post.id})">Edit</button>
        <button onclick="deletePost(${post.id})">Delete</button>
      </div>
    </div>
  `
    )
    .join("");
};

blogForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("post-id").value;
  const title = document.getElementById("post-title").value;
  const content = document.getElementById("post-content").value;
  const method = id ? "PUT" : "POST";
  const endpoint = id ? `/api/blog/${id}` : "/api/blog";

  await fetch(endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer mysecrettoken",
    },
    body: JSON.stringify({ id, title, content }),
  });
  document.getElementById("post-id").value = "";
  document.getElementById("post-title").value = "";
  document.getElementById("post-content").value = "";
  fetchPosts();
});

const editPost = (id) => {
  const post = Array.from(postsList.children).find((post) =>
    post.querySelector("button").onclick.toString().includes(`editPost(${id})`)
  );
  const title = post.querySelector("h2").innerText;
  const content = post.querySelector("p").innerText;
  document.getElementById("post-id").value = id;
  document.getElementById("post-title").value = title;
  document.getElementById("post-content").value = content;
};

const deletePost = async (id) => {
  await fetch(`/api/blog/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer mysecrettoken",
    },
  });
  fetchPosts();
};

fetchPosts();
