/*
  WRITE YOUR SOLUTION HERE
*/

const username = Symbol("username");
const password = Symbol("password");
const myUser = {
  [username]: "severian",
  [password]: "password123",
  age: 55
};

console.log(myUser.username, ' ', myUser.password);
console.log(myUser);

class User {
  #userName;
  #passWord;

  constructor(userName, passWord, userAge) {
    this.setUser(userName);
    this.setPassword(passWord)
    this.userAge = userAge;
  }

  setUser(newUser) {
    this.#userName = newUser;
  }
  setPassword(newPassWord) {
    this.#passWord = newPassWord;
  }

  get valueOfUserName() {
    return this.#userName;
  }

  get valueOfUserPassword() {
    return this.#passWord
  }

}

const newUser = new User("Severian55", "SevsPassword", 56);

console.log(`User Object User is ${newUser.userAge} years old.`)
console.log(newUser);