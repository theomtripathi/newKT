export const getRandomPosition = (index: number) => {
  const positions = [
    // Top left corner
    { left: '5%', top: '5%' },
    // Top right corner
    { left: '85%', top: '10%' },
    // Middle left
    { left: '8%', top: '45%' },
    // Middle right
    { left: '92%', top: '40%' },
    // Bottom right
    { left: '88%', top: '85%' },
    // Bottom left
    { left: '12%', top: '80%' },
    // Bottom center-right
    { left: '75%', top: '90%' },
  ];
  return positions[index % positions.length];
};