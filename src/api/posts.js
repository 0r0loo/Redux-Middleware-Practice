const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어 배우기',
    body: '리덕스 미들웨어 직접 만들어보기',
  },
  {
    id: 2,
    title: '리덕스 덩크를 사용해봅시다.',
    body: '리덕스 덩크를 사용해 비동기 작업을 처리해봅시다.',
  },
  {
    id: 3,
    title: '리덕스 사가를 사용해봅시다.',
    body: '리덕스 사가를 사용해 비동기 작업을 처리해봅시다.',
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostsById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
