export const stringifySolvingTime = (timeMs: number): string => {
  if (timeMs < 1) {
    return '> 1 ms';
  }

  if (timeMs > 1000) {
    const timeSec = timeMs / 1000.0;
    const roundedTime = Number(timeSec.toFixed(1));
    return `${roundedTime} s`;
  }

  const roundedTime = Number(timeMs.toFixed(1));
  return `${roundedTime} ms`;
};
