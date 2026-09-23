const Header = (props) => {
  return <h1 style={{ color: "#61dafb" }}>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} <span style={{ color: "#a7f3d0" }}>{props.exercises}</span>
    </p>
  );
};

const Content = (props) => {
  return (
    <div style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: "1.8" }}>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p style={{ color: "#fef08a", fontSize: "1.2rem", marginTop: "20px" }}>
      <strong>Total of {props.total} exercises</strong>
    </p>
  );
};

const Footer = (props) => {
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
      <p>{props.name}</p>
      <p>
        {props.courseCode} - {props.section}
      </p>
    </footer>
  );
};

const App = () => {
  const course = "CSIT327 - Information Management 2";
  const part1 = "CSIT321 - Applications Development and Emerging Technologies";
  const exercises1 = 3;
  const part2 = "IT317 - Project Management for IT";
  const exercises2 = 3;
  const part3 = "RIZAL031 - The Life and Works of Rizal";
  const exercises3 = 3;

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
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Footer name="Rex III L. Enriquez" courseCode="CSIT340" section="G8" />
    </div>
  );
};

export default App;
