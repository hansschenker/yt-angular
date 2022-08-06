export type Video = {
  id: string;
  title: string;
  description: string;
  url:string;
}

export interface VideoState  {
  Videos: Video[];
  Video: Video | null ;
};

export const initialState: VideoState = {
  Videos: [],
  Video: null
}
