

export const enumIcon = () => {
  const result = {}
  for (let i = 1; i <= 44; i++) {
    i <= 3 ? result[i] = 'Sun' :
    i >= 4 && i <= 7 ? result[i] = 'Cloud' :
    i >= 8 && i <= 11 ? result[i] = 'DarkCloud' :
    i >= 12 && i <= 19 ? result[i] = 'Rain' :
    i >= 22 &&  i <= 29 ? result[i] = 'Snow' : 
    i == 30 ? result[i] = 'Hot' :
    i == 31 ? result[i] = 'Cold' :
    i == 32 ? result[i] = 'Wind' :
    i >= 33 && i <= 38 ? result[i] = 'Moon' :
    i >= 39 && i <= 44 ? result[i] = 'MoonRain' : result[i] = 'Cloud'
  }
  return result;
}