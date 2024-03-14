export const imgUrl = url => {
  const basePath = process.env.BASE_PATH || '';
  return `${basePath}/${url}`
}