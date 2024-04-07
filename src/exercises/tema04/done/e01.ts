// START: Follow the instructions below.

// Make this identity function generic.
// Hint: The type for the `value` function parameter should use a type variable.

function identity<Type>(value: Type): Type {
  return value;
}
const value1 = identity<string>("France");
const value2 = identity<number>(67_413_000);

// ----
async function fetchData<Type>(url: string) {
  const response = await fetch(url);
  const responseBody = await response.json();

  return responseBody as Type;
}

// Pass the `User` type as a type argument to the generic `fetchData()` function.
interface User {
  name: string;
}
const user = await fetchData<User>("http://api.com/user/1");
console.log(user.name);

// ----
export { identity, value1, value2, fetchData };
