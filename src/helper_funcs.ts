export const capitalizeStr = (str: string) => {
   return str[0].toUpperCase() + str.substring(1);   
}

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const plural = (str: string) => {
  return str + "s";
}

