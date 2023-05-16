import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './Emaillist.css'
import Inbox from './Inbox'
import Emailbody from './Emailbody'

function Emaillist() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails").onSnapshot((snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });
  }, []);

  return (
    <div className="emaillist">
      <Inbox />
      {emails.length > 0 &&
        emails.map(({ id, data }) => (
          <Emailbody
            key={id}
            id={id} // Add 'id' prop
            name={data.to}
            subject={data.subject}
            message={data.message}
          />
        ))}
    </div>
  );
}


export default Emaillist;