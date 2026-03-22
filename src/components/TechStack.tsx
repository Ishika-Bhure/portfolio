const TechStack = () => {
  return (
    <div className="techstack-custom section-container" id="skills" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ fontSize: '4rem', marginBottom: '50px', fontWeight: 600 }}> My <span style={{ color: '#ff3b3b' }}>Skills</span></h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', paddingBottom: '100px' }}>
        <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '15px', border: '1px solid #333', transition: 'transform 0.3s ease' }} className="skill-card">
          <h3 style={{ fontSize: '1.5rem', color: '#ff3b3b', marginBottom: '15px' }}>Languages</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.5', color: '#ccc' }}>C++, C, JavaScript, Python, Java, SQL</p>
        </div>
        <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '15px', border: '1px solid #333', transition: 'transform 0.3s ease' }} className="skill-card">
          <h3 style={{ fontSize: '1.5rem', color: '#ff3b3b', marginBottom: '15px' }}>Frontend</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.5', color: '#ccc' }}>HTML, CSS, JavaScript</p>
        </div>
        <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '15px', border: '1px solid #333', transition: 'transform 0.3s ease' }} className="skill-card">
          <h3 style={{ fontSize: '1.5rem', color: '#ff3b3b', marginBottom: '15px' }}>Core Concepts</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.5', color: '#ccc' }}>Data Structures, Algorithms, DBMS (Basics), Operating Systems (Basics)</p>
        </div>
        <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '15px', border: '1px solid #333', transition: 'transform 0.3s ease' }} className="skill-card">
          <h3 style={{ fontSize: '1.5rem', color: '#ff3b3b', marginBottom: '15px' }}>Tools</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.5', color: '#ccc' }}>Git, VS Code</p>
        </div>
        <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '15px', border: '1px solid #333', transition: 'transform 0.3s ease' }} className="skill-card">
          <h3 style={{ fontSize: '1.5rem', color: '#ff3b3b', marginBottom: '15px' }}>Problem Solving</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.5', color: '#ccc' }}>Arrays, Binary Search, Hashing</p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
