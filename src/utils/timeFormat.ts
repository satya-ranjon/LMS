export const timeFormatDMY = (timestamp: string): string => {
  const dateObject = new Date(timestamp);

  const day = dateObject.getUTCDate().toString().padStart(2, "0");
  const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getUTCFullYear();

  return `${day}.${month}.${year}`;
};
