import React from 'react'
import Pagination from '@mui/material/Pagination';



const CustomPagination = ({ setPage , totalPages = 10}) => {
   const handleChange = (page) => {
       setPage(page);
       window.scroll(0,0)
   }
   

  return (
    <div style={{bottom:'40px',position:"static",  marginBottom:'60px',backgroundColor:'#fff', width:'100%', display:'flex', justifyContent:'center',zIndex:100}}>
       
        <Pagination 
        count={totalPages} 
        variant='outlined' 
        shape='rounded' 
        onChange={(e) => handleChange(e.target.textContent)}
        hidePrevButton
        hideNextButton
        />
        
        
    </div>
  )
}

export default CustomPagination