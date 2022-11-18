import React from 'react'

const list = ({people}) => {
  return (
   <>
   {people.map((x)=>{
       return(
           <article key={x.id} className="person">
               <img src={x.image} alt ={x.name} />
               <h4>{x.name}</h4>
               <p>{x.age} years</p>
           </article>
       );
   })}
   </>
  )
}

export default list

