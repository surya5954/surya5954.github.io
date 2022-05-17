import {useQuery} from 'react-query';
const medium_url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@suryaprakash-pandey"

export const useMediumPostData = () =>{
   return useQuery('mediumData', 
        ()=> fetch(medium_url).then(res => res.json())
   )
}
    