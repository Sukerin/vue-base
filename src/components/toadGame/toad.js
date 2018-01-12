/**
 * Created by dongrui3 on 2018/1/12.
 */
import  utils from './utils';


const toad=function (path) {
  let image=utils.imageFromPath(path);
  // '../assets/images/toad.jpg'
  let t={
    image:image,
    positionX:20,
    positionY:20,
    speed:10,
    actions:{},
  }
  return t;
}

export default toad;
