export const breakpoints = {
  laptop: 1400,
  tablet: 900,
  mobile: 600
}

export function isLaptop(){
  return window.innerWidth < breakpoints.laptop
}