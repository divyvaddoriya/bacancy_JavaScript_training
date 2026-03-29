
const useAuth = () => {

    const name : string | null =  localStorage.getItem("name")
    const role : string | null =    localStorage.getItem("role")
    const password =     localStorage.getItem("password")
    const isAuthenticated = Boolean(  localStorage.getItem("isAuthenticated"))

    return {
        name,
        role,
        password,
        isAuthenticated
    }
}



export { useAuth }

