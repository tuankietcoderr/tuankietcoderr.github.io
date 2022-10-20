const imgList = document.querySelectorAll("img");
// console.log(imgList);

imgList.forEach((img) => {
  const { baseURI, src } = img;
  const { pathname } = location;
  console.log(pathname);
});
