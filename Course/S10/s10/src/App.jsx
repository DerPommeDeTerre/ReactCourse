import React from "react"
import avatar from "/src/assets/user.png"
import starEmpty from "/src/assets/star-empty.png"
import starFilled from "/src/assets/star-filled.png"
import './App.css'

export const App = () => {

    let [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        isFavorite: false
    })

    function toggleFavorite(){
        setContact(function(prevValue){
            return {
                ...prevValue,
                isFavorite: !prevValue.isFavorite
                
            }
        })
    }

    let starIcon = contact.isFavorite ? starFilled : starEmpty
    //----------useState----------
    // const [contact, setContact] = React.useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (212) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: false
    // })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    //----------Ternary---------
    // let starIcon = contact.isFavorite ? starFilled : starEmpty
    // console.log(contact.isFavorite)
    //---------Toggle Function---------
    // function toggleFavorite() {
    //     setContact(function(prevValue){
    //         return{
    //             ...prevValue,
    //             isFavorite: !prevValue.isFavorite
    //         }
    //     })
    //     console.log("Toggle")
    // }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="contact">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
