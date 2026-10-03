const Header = ({ course }) => {
  return <h1 style={{ color: "#61dafb" }}>{course.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} <span style={{ color: "#a7f3d0" }}>{part.exercises}</span>
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: "1.8" }}>
      {course.parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p style={{ color: "#fef08a", fontSize: "1.2rem", marginTop: "20px" }}>
      <strong>Total of {total} exercises</strong>
    </p>
  );
};

const Footer = ({ name, courseCode, section }) => {
  return (
    <footer
      style={{
        marginTop: "auto",
        width: "100%",
        paddingTop: "20px",
        color: "#94a3b8",
      }}
    >
      <hr style={{ borderColor: "#334155", marginBottom: "20px" }} />
      <p>{name}</p>
      <p>
        {courseCode} - {section}
      </p>
    </footer>
  );
};

const App = () => {
  const course = {
    name: "CSIT327 - Information Management 2",
    parts: [
      {
        name: "CSIT321 - Applications Development and Emerging Technologies",
        exercises: 3,
      },
      { name: "IT317 - Project Management for IT", exercises: 3 },
      { name: "RIZAL031 - The Life and Works of Rizal", exercises: 3 },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        minHeight: "90vh",
        fontFamily: "system-ui, sans-serif",
        padding: "20px",
      }}
    >
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer name="Rex III L. Enriquez" courseCode="CSIT340" section="G8" />
    </div>
  );
};

export default App;