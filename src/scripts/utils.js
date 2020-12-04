export function calculateCTR(clicks, unique){
  return (clicks/unique);
}

export function calculateRPM(estimatedRevenue, unique){
  return ((estimatedRevenue * 1000)/unique);
}

export function filterDate (start, end, array, key) {
    return array.filter((item) => {
      return item[key] >= start && item[key] <= end;
  });
}

export const cleanDate = (dirtyDate) => {
  let isoDate = dirtyDate.toISOString();
  let cleanDate = isoDate.slice(0, 10);
  return cleanDate;
}