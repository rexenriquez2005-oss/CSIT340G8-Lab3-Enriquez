const Header = (props) => {
  return <h1 style={{ color: '#61dafb' }}>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div style={{ color: '#e2e8f0', fontSize: '1.1rem', lineHeight: '1.8' }}>
      <p>{props.part1} <span style={{ color: '#a7f3d0' }}>{props.exercises1}</span></p>
      <p>{props.part2} <span style={{ color: '#a7f3d0' }}>{props.exercises2}</span></p>
      <p>{props.part3} <span style={{ color: '#a7f3d0' }}>{props.exercises3}</span></p>
    </div>
  )
}

const Total = (props) => {
  return <p style={{ color: '#fef08a', fontSize: '1.2rem', marginTop: '20px' }}><strong>Total of {props.total} exercises</strong></p>
}

const Footer = (props) => {
  return (
    <footer style={{ marginTop: 'auto', width: '100%', paddingTop: '20px', color: '#c1c1c1' }}>
      <hr style={{ borderColor: '#c1c1c1', marginBottom: '20px' }} />
      <p>{props.name}</p>
      <p>{props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'CSIT327 - Information Management 2'
  const part1 = 'CSIT321 - Applications Development and Emerging Technologies'
  const exercises1 = 3
  const part2 = 'IT317 - Project Management for IT'
  const exercises2 = 3
  const part3 = 'RIZAL031 - The Life and Works of Rizal'
  const exercises3 = 3

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center',
      minHeight: '90vh',
      fontFamily: 'system-ui, sans-serif',
      padding: '20px'
    }}>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Footer name="Rex III L. Enriquez" courseCode="CSIT340" section="G8" />
    </div>
  )
}

export default App
