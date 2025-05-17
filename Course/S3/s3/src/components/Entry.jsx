

export const Entry = (props) => {
  // console.log(props)
  return (
    <>
    <article className="item-container">
        <section className="main-image-container">
            <img className="img-place" src={props.entry.img.src} alt={props.entry.img.alt} />
            {/* Use ? to bypass the error */}
        </section>
        <div className="info-container">

            <section className="location">
            <img className="img-icon" src="src/assets/marker.png" alt="marker icon" />
            <p>{props.entry.country}</p>
            <a href={props.entry.googleMapsLink}>View on Google Maps</a>
            </section>

            <section className="entry-text">
            <h2>{props.entry.title}</h2>
            <h3>{props.entry.dates}</h3>
            <p>{props.entry.text}</p>
            </section>

        </div>
    </article>
    </>

    // When using spread operator, .entry is not requiered
  )
}
