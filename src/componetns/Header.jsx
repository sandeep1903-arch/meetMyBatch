function Header ({batchName, totalStudents}){
    return (
        <header className="header">
         <h1  className="header_title">{batchName}</h1> 
         <h1 className= "header_subtitle">Total Student: {totalStudents}</h1> 
         <div className="Student_count"></div>

        </header> 
    )
}

export default Header;