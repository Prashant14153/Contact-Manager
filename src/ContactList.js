import React from "react";

const ContactList = ({contacts})=> {
    const renderConatctList = contacts.map((con)=>{
        return (
            <div id={con.id}>
                <h5>{con.name}</h5>
                <h2>{con.email}</h2>
            </div>
        )
    })
    return (
        <div>
            <h5>List OF Contacts</h5>
            {renderConatctList}
        </div>
    )
}

export default ContactList;