import students from "./data";
import Header from "./componetns/Header";
import StudentList from "./componetns/StudentList";
import "./App.css";

function App() {
    const batchName = "Meet My Batch";

    return (
        <div className="app">
            <Header
                batchName={batchName}
                totalStudents={students.length}
            />

            <main className="container">
                <StudentList students={students} />
            </main>
        </div>
    );
}

export default App;