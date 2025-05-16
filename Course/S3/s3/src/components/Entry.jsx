

export const Entry = () => {
  return (
    <>
    <article className="item-container">
        <section className="main-image-container">
            <img className="img-place" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="marker icon" />
        </section>
        <div className="info-container">

            <section className="location">
            <img className="img-icon" src="src/assets/marker.png" alt="Google Maps link" />
            <p>Japan</p>
            <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">View on Google Maps</a>
            </section>

            <section className="entry-text">
            <h2>Mount Fuji</h2>
            <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </section>

        </div>
    </article>
    </>
  )
}
