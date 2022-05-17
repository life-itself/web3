const absolutePath = ({ currentPath, basePath, relativePath }) => {
  const absolutePath = currentPath.slice(1).split("/")
  absolutePath.pop(); // remove current page name
  absolutePath.unshift(basePath);
  absolutePath.push(relativePath);
  console.log(absolutePath);
  return absolutePath.join("/");
};

export default absolutePath;
