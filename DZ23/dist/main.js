"use strict";

var apiUrl = "https://jsonplaceholder.typicode.com";
var postContainer = document.getElementById("js--postContainer");
var postTitle = document.getElementById("js--postTitle");
var postBody = document.getElementById("js--postBody");
var commentsButton = document.getElementById("js--commentsButton");
var searchButton = document.getElementById("js--searchButton");
var postIdInput = document.getElementById("js--postId");
var commentsContainer = document.getElementById("js--comments");
var loadPostById = function loadPostById(postId) {
  return fetch("".concat(apiUrl, "/posts/").concat(postId)).then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error! status: ".concat(response.status));
    }
    return response.json();
  });
};
var loadCommentsByPostId = function loadCommentsByPostId(postId) {
  return fetch("".concat(apiUrl, "/posts/").concat(postId, "/comments")).then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error! status: ".concat(response.status));
    }
    return response.json();
  });
};
searchButton.addEventListener("click", function () {
  commentsButton.className = "";
  commentsContainer.innerText = "";
  if (postIdInput.value != 0) {
    var postId = postIdInput.value;
    loadPostById(postId).then(function (post) {
      postTitle.textContent = post.title;
      postBody.textContent = post.body;
      postContainer.style.display = "block";
      commentsButton.addEventListener("click", function () {
        loadCommentsByPostId(postId).then(function (comments) {
          commentsContainer.innerText = "";
          comments.forEach(function (comment) {
            commentsContainer.insertAdjacentHTML('beforeend', "<p class=\"name\">".concat(comment.name, " <span class=\"email\">").concat(comment.email, "</span></p>") + "<p class=\"comment-body\">".concat(comment.body, "</p>"));
          });
        });
        commentsButton.classList.add('disable');
      });
    })["catch"](function (error) {
      console.error("Error while loading post", error);
      alert("Could not load post. Please try again later.");
    });
  } else {
    alert('Please input Post ID');
  }
});