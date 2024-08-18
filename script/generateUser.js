// Функция для создания пользователя
function createUser(name) {
  return {
    name: name,
    getName: function () {
      return this.name;
    },
  };
}

// Функция для генерации случайного имени
function generateRandomName(length = 8) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Функция для создания массива случайных пользователей
function createRandomUsers(n) {
  const users = [];
  for (let i = 0; i < n; i++) {
    const name = generateRandomName();
    const user = createUser(name);
    users.push(user);
  }
  return users;
}

// Функция для отображения пользователей на странице
function displayUsers() {
  // Получаем элемент списка
  const userList = document.getElementById("userList");

  // Создаем 5 случайных пользователей
  const users = createRandomUsers(5);

  // Добавляем каждого пользователя в список на страницу
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.className = "user-item";
    listItem.textContent = user.getName();
    userList.appendChild(listItem);
  });
}

// Запускаем функцию отображения пользователей
displayUsers();
