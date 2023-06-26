import { useRouter } from "next/router";

const Post = () => {
    const route=useRouter();
    const {postid}=route.query;
    return ( <h1>post page {postid}</h1> );
}
 
export default Post;