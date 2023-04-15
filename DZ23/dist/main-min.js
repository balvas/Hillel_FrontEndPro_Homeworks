"use strict";var apiUrl="https://jsonplaceholder.typicode.com",postContainer=document.getElementById("js--postContainer"),postTitle=document.getElementById("js--postTitle"),postBody=document.getElementById("js--postBody"),commentsButton=document.getElementById("js--commentsButton"),searchButton=document.getElementById("js--searchButton"),postIdInput=document.getElementById("js--postId"),commentsContainer=document.getElementById("js--comments"),loadPostById=function(t){return fetch("".concat(apiUrl,"/posts/").concat(t)).then(function(t){if(!t.ok)throw new Error("HTTP error! status: ".concat(t.status));return t.json()})},loadCommentsByPostId=function(t){return fetch("".concat(apiUrl,"/posts/").concat(t,"/comments")).then(function(t){if(!t.ok)throw new Error("HTTP error! status: ".concat(t.status));return t.json()})};searchButton.addEventListener("click",function(){if(commentsButton.className="",commentsContainer.innerText="",0!=postIdInput.value){var t=postIdInput.value;loadPostById(t).then(function(n){postTitle.textContent=n.title,postBody.textContent=n.body,postContainer.style.display="block",commentsButton.addEventListener("click",function(){loadCommentsByPostId(t).then(function(t){commentsContainer.innerText="",t.forEach(function(t){commentsContainer.insertAdjacentHTML("beforeend",'<p class="name">'.concat(t.name,' <span class="email">').concat(t.email,"</span></p>")+'<p class="comment-body">'.concat(t.body,"</p>"))})}),commentsButton.classList.add("disable")})}).catch(function(t){console.error("Error while loading post",t),alert("Could not load post. Please try again later.")})}else alert("Please input Post ID")});