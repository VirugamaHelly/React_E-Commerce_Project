import React from 'react';

function SearchBar({ search, setSearch }) {
    function change(e) {
        setSearch(e.target.value)
    }
  return (
    <div className="search mb-4" style={{display:"flex",justifyContent:"center"}}>
    <input
      type="text"
      placeholder="🔍 Search..."   
      value={search}
      onChange={change}
      style={{width:"30%",padding:"6px"}}
    />
    <button style={{padding:"6px",width:"60px"}}>🔍</button>
</div>
  );

}

export default SearchBar;
// import React, { useState } from 'react'

// export default function SearchBar() {
//     const[state,setState]=useState("")
//     function change(e) {
//         setState(e.target.value)
//     }
//   return (
//     <div>
//       <input type="text" placeholder='etnejfdkkdf' value={state} onChange={change}/>
//     </div>
//   )
// }

