import { useQuery } from '@tanstack/react-query';

const medium_url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@suryaprakash-pandey";

export const useMediumPostData = () => {
   return useQuery({
        queryKey: ['mediumData'],
        queryFn: () => fetch(medium_url).then(res => res.json()),
        staleTime: 1000 * 60 * 30, // 30 minutes
        retry: 2
   });
};
