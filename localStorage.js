const getDataJsonAsyncHandleError = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getPostsButton = document.getElementById('getPosts');
getPostsButton.addEventListener('click', async () => {
  const posts = await getDataJsonAsyncHandleError();
  localStorage.setItem('first_post12', JSON.stringify(posts[3]));
});

const displayPostButton = document.getElementById('displayPost');
const consoleDisplay = document.getElementById('consoleDisplay');

displayPostButton.addEventListener('click', () => {
  const firstPost = JSON.parse(localStorage.getItem('first_post'));
  consoleDisplay.textContent = JSON.stringify(firstPost);
  console.log(firstPost);
});

const deletePostButton = document.getElementById('deletePost');
deletePostButton.addEventListener('click', () => {
  localStorage.removeItem('first_post');
});

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  localStorage.clear();
});
