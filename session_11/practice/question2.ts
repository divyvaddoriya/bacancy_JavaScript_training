// Question 2 — Implement MyPick<T, K>


type MyPick <T , K extends keyof T>  = {
    [ a in K] : T[a]
}

// Question 3 — Implement MyOmit<T, K>

// This is more advanced, because now you must exclude keys.

type MyOmit<T , k extends keyof T> = {
    [a in keyof T as a extends k ? never : a] : T[a]
}



// Question 4 — Implement DeepPartial<T> 🔥 (Very Important)


type DeepPartial <T> = {
    [k in keyof T ] ?: T[k] extends Object ? DeepPartial<T[k]>  : T[k]
}

// type DeepPartial<T> =
//   T extends Array<infer U>
//     ? Array<DeepPartial<U>>
//     : T extends object
//       ? { [K in keyof T]?: DeepPartial<T[K]> }
//       : T


// Question 5 — FAANG Level — MyReadonly<T>

// type MyReadonly<T> = ?


type MyReadOnly <T> = {
    readonly [k in keyof T] : T[k] 
}


// Question 6 — Very Important — Implement MyRecord<K, T> 🔥


type MyRecord<T  extends keyof any, k> = {
    [p in T] : k
}

type Role = "admin" | "user" | "guest"

type RolePermissions = MyRecord<Role, boolean>


// Question 7 — 🔥 Expert Level — UnionToIntersection<T>

// This is VERY IMPORTANT
