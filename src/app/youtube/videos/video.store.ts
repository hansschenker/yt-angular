import { Store } from "../store/store";
import { VideoState, initialState } from "./video.types";


const video1 = {
  id: "1",
  title: "Video 1",
  description: "This is video 1",
  url: "https://www.youtube.com/watch?v=1"
}
const videoState:VideoState = {
  Videos: [video1],
  Video: video1
}
const store =  new Store<VideoState>(initialState)
store.updateState(videoState)

console.log(store.stateChanges())
