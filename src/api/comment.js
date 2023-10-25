async function newComment(
  blogId,
  commentTime,
  commentUserName,
  commentUserId,
  commentContent,
  toast,
  token,
  setAllComments
) {
  const apiURL = `https://restaurant-kitchen-k6lk.onrender.com/comment/newComment?blogId=${blogId}`;

  const commentInformation = {
    commentContent: commentContent,
    commentUserName: commentUserName,
    commentUserId: commentUserId,
    commentTime: commentTime,
    replyContent: "",
    replyUserName: "",
    replyUserId: "",
    replyTime: "",
  };

  async function handleResponse(data) {
    if (data.ok === true) {
      const response = await data.json();
      getBlogSpecificComments(blogId, setAllComments);
      console.log("response", response);
      toast(response.message);
    } else {
      const response = await data.json();
      console.log("response", response);
      toast(response.message);
    }
  }
  await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(commentInformation),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(handleResponse)
    .catch((error) => {
      console.log(error);
    });
}

async function replyComment(
  commentId,
  replyTime,
  replyUserId,
  replyUserName,
  replyContent,
  toast,
  token,
  blogId,
  setAllComments
) {
  const apiURL = `https://restaurant-kitchen-k6lk.onrender.com/comment/replyComment?commentId=${commentId}`;

  const commentInformation = {
    replyContent: replyContent,
    replyUserName: replyUserName,
    replyUserId: replyUserId,
    replyTime: replyTime,
  };

  async function handleResponse(data) {
    if (data.ok === true) {
      const response = await data.json();
      console.log("response", response);
      getBlogSpecificComments(blogId, setAllComments);
      toast(response.message);
    } else {
      const response = await data.json();
      console.log("response", response);
      toast(response.message);
    }
  }
  await fetch(apiURL, {
    method: "PUT",
    body: JSON.stringify(commentInformation),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(handleResponse)
    .catch((error) => {
      console.log(error);
    });
}

async function getBlogSpecificComments(blogId, setAllComments) {
  const apiURL = `https://restaurant-kitchen-k6lk.onrender.com/comment/getBlogSpecificComments?blogId=${blogId}`;

  async function handleResponse(data) {
    if (data.ok === true) {
      const response = await data.json();
      console.log("response", response);
      setAllComments(response.data);
    }
  }

  await fetch(apiURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleResponse)
    .catch((error) => {
      console.log(error);
    });
}

export { newComment, replyComment, getBlogSpecificComments };
