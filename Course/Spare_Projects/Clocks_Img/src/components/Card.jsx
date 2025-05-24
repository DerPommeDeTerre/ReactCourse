import React from 'react'

export const Card = (props) => {

  let [image, setImage] = React.useState(props.cardImg.img.src)

  const imageMap = {
    blue: "src/assets/CASIO-MTP-B145-A.avif",
    tBlue: "src/assets/CASIO-MTP-B145-AT.avif",
    salmon: "src/assets/CASIO-MTP-B145-RS.avif",
  }

  function changeHandle(event){
    const selectedColor = event.target.value
    setImage(imageMap[selectedColor])
  }

  return (
    <article className='card-container'>
        <h1>Casio MTP-B145</h1>
        <img src={image} alt="" />
        <section className='color-selection'>
          <label htmlFor="">Blue<input value="blue" type="radio"  name='color-option'  onChange={changeHandle}/></label>
          <label htmlFor="">Tiffany Blue<input value="tBlue" type="radio" name='color-option' onChange={changeHandle}/></label>
          <label htmlFor="">Salmon<input value="salmon" type="radio" name='color-option' onChange={changeHandle}/></label>
        </section>
        <p>This is a clock</p>

    </article>
  )
}
