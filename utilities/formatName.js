module.exports = (user) => {
  if(user.firstName || user.lastName) {
    return `${user.firstName} ${user.lastName}`;
  }

  return `${user.username}`;
}
