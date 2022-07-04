const saveUser = (user) => {
  const name = {
    user,
  };
  localStorage.setItem('user', JSON.stringify(name));
};

const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user
}

const clear = () => {
  localStorage.clear();
};

export { saveUser, getUser, clear };