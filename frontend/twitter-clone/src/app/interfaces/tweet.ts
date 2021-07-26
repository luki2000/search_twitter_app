export interface ITweet {
   created_at: Date;
   id: number;
   text: string;
   entities: {
       hashtags: [],
       urls: []
   }
   user: {
    profile_image_url: string
   }
}