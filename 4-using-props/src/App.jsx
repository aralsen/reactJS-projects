import Student from "./Student.jsx";

function App() {

  return (
    <>
        <Student name="Spongebob" age={25} isStudent={true}/>
        <Student name="Patrick" age={24} isStudent={true}/>
        <Student name="Squidward" age={50} isStudent={false}/>
        <Student name="Sandy" age={27} isStudent={true}/>
        <Student />
    </>
  )
}

export default App
