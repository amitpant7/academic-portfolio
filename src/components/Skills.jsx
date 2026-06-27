import { profile } from '../data/profile'

const languages = ['Python', 'C++', 'C', 'SQL']

export default function Skills() {
  const skillGroups = profile.skills.filter(g => g.name !== 'languages')

  return (
    <section id="skills" style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 28px 68px' }}>
      <div className="section-label">// toolkit</div>
      <h2 className="section-title">Skills</h2>
      <p style={{ fontSize: 14, color: '#AEB7C2', margin: '0 0 22px', maxWidth: 580, lineHeight: 1.62 }}>
        Research-driven — most of my work is experimentation and prototyping, pushing deep-learning models toward real-time, on-device performance.
      </p>

      {/* Languages row */}
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 9, marginBottom: 18 }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B7480', marginRight: 3 }}>
          <span style={{ color: '#0EA5B5' }}>#</span> languages
        </span>
        {languages.map(l => (
          <span key={l} className="skill-pill">{l}</span>
        ))}
      </div>

      {/* Skill category cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {profile.skills.map(group => (
          <div key={group.name} style={{ border: '1px solid #232B36', borderRadius: 13, padding: '18px 18px 20px', background: '#151B23' }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B7480' }}>
              <span style={{ color: '#0EA5B5' }}>#</span> {group.name}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 13 }}>
              {group.items.map(item => (
                <span key={item} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
