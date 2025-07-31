import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { TaskInput } from "./components/TaskInput";
import { Task } from "./components/Task";
function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="chanadda" type="admin"></Sidebar>
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TaskInput></TaskInput>
            {/* Card รายการ */}
            <Task
              id={1}
              title="Read a book"
              description="Vite + React + Bootstrap + TS"
              isDone={true}
            />
            <Task
              id={2}
              title="Write code"
              description="Finish project for class"
              isDone={false}
            />
            <Task
              id={3}
              title="Deploy app"
              description="Push project to GitHub Pages"
              isDone={true}
            />
          </main>
        </div>
      </div>
      
      {/* Footer ด้านล่าง */}
      <Footer
        year="2026"
        fullName="Wisarut Sada"
        studentId="630612110"
      ></Footer>
    </div>
  );
}

export default App;
