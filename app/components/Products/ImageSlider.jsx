'use client'


import ImageGallery from "react-image-gallery";
function ImageSlider({images}) {
  console.log(images,'image')
    const imageData = []; 
       for(let i = 0; i < images?.length; i++){
       imageData.push ({
          original: images?.[i]?.url,
          thumbnail:images?.[i]?.url,
        })
       }
    return (
        <div className="w-full h-full relative">
       <ImageGallery onPlay={false} showPlayButton={false} items={imageData} />
      </div>
    );
}

export default ImageSlider;