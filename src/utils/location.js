export const getLocation = () => {
  const currentLocation = navigator.geolocation.getCurrentPosition((position) => {
    return position.coords;
  });
  return currentLocation;
};
