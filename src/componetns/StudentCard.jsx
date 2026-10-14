function StudentCard({student}){
    return (
        <div className="student-card">
            <h3 className="student-card_name">{student.name}</h3>
            <h3 className="student-card_city">{student.city}</h3>
            <h3 className="student-card_emogy">{student.emoji}</h3>
            <h3 className="student-card_fan-fact">{student.funFact}</h3>
            <div  className ="skills">
                {student.skills.map((skill) => (
                    <span className="skill_tag" key={skill}>{skill}</span>

                
                ))}
                </div>
                </div>
    )
}
export default StudentCard;