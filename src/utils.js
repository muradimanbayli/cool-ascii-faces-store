export const formatCurrency = (amount) => {
  const formatted = Number( amount / 100 ).toFixed(2);
  return `$ ${formatted}`;
}

export const formatDate = (dateInString) => {
  const date = new Date(Date.parse(dateInString));
  const now = new Date();
  const diff = now - date;
  const diffInDay = Number(diff/1000/60/60/24).toFixed(0);
  return diffInDay <= 7 ? `${diffInDay} days ago` : dateInString;
}
