export const fetchProducts = async (page,limit,sort) => {
  const response = await fetch('http://localhost:3000/products?_page='+page+'&_limit='+limit+'&_sort='+sort);
  const results = await response.json();
  return results;
}
