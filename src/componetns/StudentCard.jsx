function StudentCard({student}){
    return (
        <div className="student-card">
            <h3 className="student-card_name">{student.name}</h3>
            <h3 className="student-card_city">{student.city}</h3>
            <h3 className="student-card_emogy">{student.emogy}</h3>
            <h3 className="student-card_fan-fact">{student.fanfact}</h3>
            <div  className ="skills">
                {student.skills.map(skill)=>(
                    <spam className="skill_tag" key ={skill}>{skill}</span>

                
                )}
                </div>
                </div>
    )
}
export default StudentCard;