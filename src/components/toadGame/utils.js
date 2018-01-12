/**
 * Created by dongrui3 on 2018/1/12.
 */

const  utils={
  imageFromPath:function (path) {
    let image= new Image();
    image.src=path;
    return image;
  },
}

export default utils;
