import React, { useState,useEffect } from 'react'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { database } from '../firebase';

function Followers({userData, postData}) {
    const [follow, setFollow] = useState(null);
    useEffect(() => {
        let check = postData.followers.includes(userData.userId) ? true : false
        setFollow(check)
    }, [postData])

    const handleLike = () => {
        if(follow==true){
            let narr = postData.followers.filter((el)=>el!=userData.userId)
            database.posts.doc(postData.postId).update({
                followers:narr
            })
        }else{
            let narr = [...postData.followers,userData.userId]
            database.posts.doc(postData.postId).update({
                followers:narr
            })
        }
    }
    return (
        <div>
            {
                 follow!=null?
                 <>
                 {
                     follow==true?<ThumbUpAltIcon className={`icon-styling2 follow`} onClick={handleLike}/> :<ThumbUpAltIcon className={`icon-styling2 unfollow`} onClick={handleLike}/>
                 }
                 </>:
                 <></> 
            }
        </div>
    )
}

export default Followers