const addToDb = (location, time) => {
  let routineCart = getRoutineCart(location);
  routineCart[time] = 1;

  localStorage.setItem(location, JSON.stringify(routineCart));
};

const getRoutineCart = (location) => {
  let routineCart = {};
  const stored = localStorage.getItem(location);
  if (stored) {
    routineCart = JSON.parse(stored);
  }
  return routineCart;
};

const setBreakToDb = (location, time) => {
  localStorage.setItem(location, time);
};

export { addToDb, getRoutineCart, setBreakToDb };
