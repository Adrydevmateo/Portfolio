import skillList from "@/data/skill";

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div style={{ display: "flex", flexWrap: "wrap", columnGap: "30px" }}>
        {skillList.map((skill) => (
          <div
            className="skill"
            key={skill.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {<skill.icon />}
            <p className="skill__name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
