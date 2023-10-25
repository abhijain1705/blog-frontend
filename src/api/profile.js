async function newBlog(
  blogImage,
  h1,
  h2,
  h3,
  p1,
  p2,
  p3,
  userId,
  toast,
  navigateToProfile
) {
  const apiURL = `https://restaurant-kitchen-k6lk.onrender.com/blog/newBlog`;

  if (blogImage == null) {
    toast("Blog Image is necessary");
    return;
  }

  const blogInformation = new FormData();
  const currentDate = new Date();
  blogInformation.append("blogImage", blogImage);
  blogInformation.append("h1", h1);
  blogInformation.append("h2", h2);
  blogInformation.append("h3", h3);
  blogInformation.append("p1", p1);
  blogInformation.append("p2", p2);
  blogInformation.append("p3", p3);
  blogInformation.append("userId", userId);
  blogInformation.append("uploadDate", currentDate);

  async function handleResponse(data) {
    if (data.ok === true) {
      const response = await data.json();
      console.log("response", response);
      toast(response.message);
      setTimeout(() => {
        navigateToProfile();
      }, 3000);
    } else {
      const response = await data.json();
      console.log("response", response);
      toast(response.message);
    }
  }
  await fetch(apiURL, {
    method: "POST",
    body: blogInformation,
  })
    .then(handleResponse)
    .catch((error) => {
      console.log(error);
    });
}

async function updateBlog(
  blogId,
  toast,
  navigateToProfile,
  blogImage,
  h1,
  h2,
  h3,
  p1,
  p2,
  p3
) {
  const apiURL = `https://restaurant-kitchen-k6lk.onrender.com/blog/updateBlog?id=${blogId}`;

  const blogInformation = new FormData();
  if (blogImage !== null) {
    blogInformation.append("blogImage", blogImage);
  }
  blogInformation.append("h1", h1);
  blogInformation.append("h2", h2);
  blogInformation.append("h3", h3);
  blogInformation.append("p1", p1);
  blogInformation.append("p2", p2);
  blogInformation.append("p3", p3);
  async function handleResponse(data) {
    if (data.ok === true) {
      const response = await data.json();
      console.log("response", response);
      toast(response.message);
      setTimeout(() => {
        navigateToProfile();
      }, 3000);
    } else {
      const response = await data.json();
      console.log("response", response);
      toast(response.message);
    }
  }
  await fetch(apiURL, {
    method: "PUT",
    body: blogInformation,
  })
    .then(handleResponse)
    .catch((error) => {
      console.log(error);
    });
}

async function deleteBlog(blogId) {
  const apiURL = `https://restaurant-kitchen-k6lk.onrender.com/blog/deleteBlog?id=${blogId}`;

  async function handleResponse(data) {
    if (data.ok === true) {
      const response = await data.json();
      window.location.reload();
      console.log("response", response);
    }
  }

  await fetch(apiURL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(handleResponse)
    .catch((error) => {
      console.log(error);
    });
}

async function fetchUserSpecificBlogs(userid, setUserBlogs) {
  const apiURL = `https://restaurant-kitchen-k6lk.onrender.com/blog/userSpecificBlogs?id=${userid}`;

  async function handleResponse(data) {
    if (data.ok === true) {
      const response = await data.json();
      console.log("response", response);
      setUserBlogs(response.blogData);
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

export { newBlog, updateBlog, deleteBlog, fetchUserSpecificBlogs };
