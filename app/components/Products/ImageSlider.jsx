'use client'


import ImageGallery from "react-image-gallery";
function ImageSlider() {
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];
    return (
        <div className="w-full h-full relative">
       <ImageGallery onPlay={false} showPlayButton={false} items={images} />
      </div>
    );
}

export default ImageSlider;