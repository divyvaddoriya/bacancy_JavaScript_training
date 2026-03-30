const fetchUser =  Promise.resolve("Leanne Geaham")
const fetchPostCount =  Promise.resolve(10)
const fetchCommentCount =  Promise.resolve(5)

const data = Promise.all([fetchUser , fetchPostCount , fetchCommentCount]).then((data) => (
     {
        User : data[0],
        postCount : data[1],
        commentCount: data[2],
    }
)).then((data) => console.log(data))



// async function callsdifferentAPI  ()  {

//     try {
//         const userData = await fetch("https://jsonplaceholder.typicode.com/users/1")

//         const {id} = await userData.json()
//         if(!id) throw new Error("user not fetched")

//         const posts = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=10015`)

//         const postsCount = await posts.json()
//         if(!postsCount) throw new Error("error fetching post for user " + id)

//         console.log(postsCount);

//         const commentCount = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")

//         if(!commentCount) throw new Error("")
        
//     } catch (error) {
    
//         console.log("error fetching the user" + error)
    
//     }

// }

// callsdifferentAPI()