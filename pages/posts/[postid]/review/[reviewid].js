import { useRouter } from "next/router";

const Review = () => {
    const router =useRouter();
    const{reviewid,postid}=router.query;
    return ( <h1>review {reviewid} from post {postid} </h1> );
}
 
export default Review;