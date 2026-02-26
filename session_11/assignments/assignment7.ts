// Assignment 7

// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.

// Create a utility NonNullableFields<T> that removes null and undefined from all properties.

// Apply both to User and test different scenarios.


type ReadonlyByKeys<T, K extends keyof T = keyof T> =
  Omit<T, K> & Readonly<Pick<T, K>>

type User2 = {
  id: string | null;
  name?: string | null;
  email: string | null;
  role: "ADMIN" | "CUSTOMER";
  isActive?: boolean | null;
};

type UserReadonly = ReadonlyByKeys<User2, "id" | "email">;

const user1: UserReadonly = {
  id: "1",
  name: "Divy",
  email: "test@gmail.com",
  role: "ADMIN",
};

// Cannot assign to 'id' because it is a read-only property/
// user1.id = "2";

type NonNullableFields<T> = {
  [K in keyof T]: NonNullable<T[K]>;
}

type UserNotNull = NonNullableFields<User2>;

const user2: UserNotNull = {
  id: "1",
  name: "Divy",
  email: "test@gmail.com",
  role: "CUSTOMER",
  isActive: true,
};


// Type 'null' is not assignable to type 'string'
// const user3: UserNotNull = {
//   id: null,   // error
//   name: "Divy",
//   email: "test@gmail.com",
//   role: "ADMIN",
//   isActive: true,
// };