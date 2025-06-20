import React from "react"
import avatar from "/src/icons/user.png"

export default function Header(props) {
    return (
        <header>
            <img src={avatar} />
            <p>{props.user}</p>
        </header>
    )
}
