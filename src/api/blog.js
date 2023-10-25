async function blogAPI(setBlogData) {
  const apiURL =
    "https://restaurant-kitchen-k6lk.onrender.com/blog/getAllBlogs";

  async function handleResponse(data) {
    if (data.ok === true) {
      const response = await data.json();
      console.log("response", response);
      setBlogData(response.blogData);
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

async function singleBlogAPI(blogId, setBlogData) {
  const apiURL = `https://restaurant-kitchen-k6lk.onrender.com/blog/fetchSingleBlog?id=${blogId}`;

  async function handleResponse(data) {
    if (data.ok === true) {
      const response = await data.json();
      console.log("response", response);
      setBlogData(response.blogData);
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
export { blogAPI, singleBlogAPI };
