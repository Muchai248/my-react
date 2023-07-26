import React,{useState} from "react";

function SearchBar(){
    const [isOn, setIsOn]=useState(false)
    console.log({isOn, setIsOn})


    function handleClick(event){
        setIsOn(!isOn)
       
    }


    <button onClick={handleClick}>{isOn? "ON": "OFF"}</button>




     return(
        <>
       <form style={{paddingInline:"5px", border: "1px solid blue", display: "flex", flexDirection:"column"}}>
         <input type="Search" placeholder="Search here...."></input>
            
          <label>
               <input type="checkbox"></input>
             </label>
       
       </form>
       <button onClick={handleClick}>{isOn? "ON": "OFF"}</button>

       </>
       

     )
}




export default SearchBar;