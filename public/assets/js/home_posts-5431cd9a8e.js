{let t=function(){let t=$("#new-post-form");new FormData(t);t.submit((function(o){o.preventDefault(),$.ajax({type:"post",url:"/post/create",data:t.serialize(),success:function(t){let o=e(t);console.log(o),$("#posts-list-container>ul").prepend(o),n($(" .delete-post-button",o)),new PostComments(t.data.post._id),new ToggleLike($(" .toggle-like-button",o)),new Noty({theme:"relax",text:"Post published!",type:"success",layout:"topRight",timeout:1500}).show()},error:function(t){console.log(t.responseText)}})}))},e=function(t){return $(`<li id="post-${t.data.post._id}">\n                    <p id="post-content">\n                        \n                       \n                        ${t.data.post.content}\n                        <br>\n                        <small style="color: blue;font-weight:bolder;">\n                        ${t.data.user_info}\n                        </small>\n\n                        \n                        <small>\n                            <a class="delete-post-button"  href="/post/destroy/${t.data.post._id}">Delete</a>\n                        </small>\n                        <small style="margin-left: 20vw;  id="post_created_time"">${t.data.post.createdAt}</small>\n                        <a class="toggle-like-button" data-likes="0" href="/likes/toggle/?id=${t.data.post._id}&type=Post">\n                                    0 Likes\n                                </a>\n\n                    </p>\n                    <div class="post-comments">\n                        \n                            <form action="/comments/create" method="POST">\n                                <input type="text" name="content" placeholder="Type Here to add comment..." required>\n                                <input type="hidden" name="post" value="${t.data.post._id}" >\n                                <input type="submit" value="Add Comment">\n                            </form>\n               \n                \n                        <div class="post-comments-list">\n                            <ul id="post-comments-${t.data.post._id}">\n                                \n                            </ul>\n                        </div>\n                    </div>\n                    \n                </li>`)},n=function(t){$(t).click((function(e){e.preventDefault(),$.ajax({type:"get",url:$(t).prop("href"),success:function(t){console.log(t),$("#post-"+t.data.post_id).remove(),new Noty({theme:"relax",text:"Post Deleted",type:"success",layout:"topRight",timeout:1500}).show()},error:function(t){console.log(t.responseText)}})}))};(function(){$("#posts-list-container>ul>li").each((function(){let t=$(this),e=$(" .delete-post-button",t);n(e);let o=t.prop("id").split("-")[1];new PostComments(o)}))})(),t()}