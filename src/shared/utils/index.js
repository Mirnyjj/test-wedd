const getUserName = (currentUrl, users) => {
  if (!currentUrl || !users) {
    return {
      name: "Гость",
      appeal: "Дорогой"
    };
  }

  let resultName = "";
  let count = 0;

  users.filter(user => {
    if (user.url === currentUrl) {
      resultName = user;
      count += 1;
      return;
    }
  });

  if (!count) {
    return "guest";
  }

  return resultName;
};

export const getUrlName = users => {
  if (!window || !window?.location || !window?.location?.pathname) {
    console.log("window not found");
    return false;
  }
  const urlName = window.location.pathname.slice(1);
  const userName = getUserName(urlName, users);

  return userName;
};
