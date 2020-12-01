export function calculateCTR(clicks, unique){
  return (clicks/unique);
}

export function calculateRPM(estimatedRevenue, unique){
  return ((estimatedRevenue * 1000)/unique);
}