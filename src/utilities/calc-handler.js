const addToDb = (id) => {
  let routineCart = getRoutineCart();
  routineCart[id] = 1;

  localStorage.setItem("routine-cart", JSON.stringify(routineCart));
};

const getRoutineCart = () => {
  let routineCart = {};
  const stored = localStorage.getItem("routine-cart");
  if (stored) {
    routineCart = JSON.parse(stored);
  }
  return routineCart;
};

export { addToDb, getRoutineCart };
