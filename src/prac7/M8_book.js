import React from 'react'
function Book(props) {
if(props.bookName === "The Hitvada") {
throw new Error("Not a Book");
}
return <h2 className='m'>{props.bookName}</h2>
}
export default Book