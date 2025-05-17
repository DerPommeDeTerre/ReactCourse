import React from 'react'


export const Contact = (props) => {
    console.log(props)
  return (
    <>
    <article className='card-container'>
        <img className="main-image" src={props.img} alt="Mr. Whiskerson" />
        <h3 className='contact-name'>{props.name}</h3>

        <section className='info-container'>
            <div className='phone-info'>
                <img src="src/assets/phone-icon.png" alt="phone icon" />
                <p>{props.phone}</p>
            </div>
            <div className='mail-info'>
                <img src="src/assets/mail-icon.png" alt="mail icon" />
                <p>{props.mail}</p>
            </div>
        </section>
    </article>
    </>
  )
}

//----------Deestructuring----------
// export const Contact = ({img, name, phone, mail}) => {//Object notation
//     // console.log(props)
//   return (
//     <>
//     <article className='card-container'>
//         <img className="main-image" src={img} alt="Mr. Whiskerson" />
//         <h3 className='contact-name'>{name}</h3>

//         <section className='info-container'>
//             <div className='phone-info'>
//                 <img src="src/assets/phone-icon.png" alt="phone icon" />
//                 <p>{phone}</p>
//             </div>
//             <div className='mail-info'>
//                 <img src="src/assets/mail-icon.png" alt="mail icon" />
//                 <p>{mail}</p>
//             </div>
//         </section>
//     </article>
//     </>
//   )
// }