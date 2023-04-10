const apiUrl = "https://jsonplaceholder.typicode.com";

const postContainer = document.getElementById("js--postContainer");
const postTitle = document.getElementById("js--postTitle");
const postBody = document.getElementById("js--postBody");
const commentsButton = document.getElementById("js--commentsButton");
const searchButton = document.getElementById("js--searchButton");
const postIdInput = document.getElementById("js--postId");
const commentsContainer = document.getElementById("js--comments");

const loadPostById = (postId) => {
   return fetch(`${apiUrl}/posts/${postId}`).then((response) => {
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
   });
};

const loadCommentsByPostId = (postId) => {

   return fetch(`${apiUrl}/posts/${postId}/comments`).then((response) => {
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
   });
};

searchButton.addEventListener("click", () => {
   commentsButton.className = "";
   commentsContainer.innerText = "";
   if (postIdInput.value != 0) {
      const postId = postIdInput.value;
      loadPostById(postId)
         .then((post) => {
            postTitle.textContent = post.title;
            postBody.textContent = post.body;
            postContainer.style.display = "block";
            commentsButton.addEventListener("click", () => {
               loadCommentsByPostId(postId).then((comments) => {
                  commentsContainer.innerText = "";
                  comments.forEach(comment => {
                     commentsContainer.insertAdjacentHTML('beforeend', (
                        `<p class="name">${comment.name} <span class="email">${comment.email}</span></p>` +
                        `<p class="comment-body">${comment.body}</p>`
                     ))
                  });
               });
               commentsButton.classList.add('disable');
            });
         })
         .catch((error) => {
            console.error("Error while loading post", error);
            alert("Could not load post. Please try again later.");
         });
   } else {
      alert('Please input Post ID');
   }

});