import { profile } from '../data/profile'

const IconDrum = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="17.5" r="2.4" fill="currentColor" stroke="none" />
    <circle cx="17" cy="15.5" r="2.4" fill="currentColor" stroke="none" />
    <line x1="9.4" y1="17.5" x2="9.4" y2="6.5" />
    <line x1="19.4" y1="15.5" x2="19.4" y2="4.5" />
    <path d="M9.4 6.5 L19.4 4.5" />
  </svg>
)

const IconBook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6 C10 4.5, 6.5 4.5, 4 6 V18 C6.5 16.5, 10 16.5, 12 18 Z" />
    <path d="M12 6 C14 4.5, 17.5 4.5, 20 6 V18 C17.5 16.5, 14 16.5, 12 18 Z" />
  </svg>
)

const IconSpeech = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5.5 H20 V14.5 H11 L7 18 V14.5 H4 Z" />
    <line x1="8" y1="9.8" x2="16" y2="9.8" />
    <line x1="8" y1="12.4" x2="13" y2="12.4" />
  </svg>
)

const IconMountain = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 19 L9 8 L13 14 L15.5 10 L21.5 19 Z" />
    <circle cx="7" cy="5.5" r="2" />
  </svg>
)

const hobbyIconMap = { drum: <IconDrum />, book: <IconBook />, speech: <IconSpeech />, mountain: <IconMountain /> }

function LangDots({ level }) {
  return (
    <div style={{ display: 'flex', gap: 6 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i < level ? '#0EA5B5' : '#2A323D', flexShrink: 0, display: 'block' }} />
      ))}
    </div>
  )
}

export default function HobbiesLanguages() {
  return (
    <section style={{ background: '#11161D', borderTop: '1px solid #232B36' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 28px 70px', display: 'flex', flexWrap: 'wrap', gap: 54 }}>

        {/* Hobbies */}
        <div style={{ flex: '1 1 340px', minWidth: 300 }}>
          <div className="section-label">// outside work</div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', margin: '0 0 22px', color: '#EEF2F7' }}>Hobbies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }}>
            {profile.hobbies.map(h => (
              <div key={h.name} style={{ background: '#151B23', border: '1px solid #232B36', borderRadius: 12, padding: 16 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(14,165,181,0.10)', color: '#0EA5B5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                  {hobbyIconMap[h.icon]}
                </div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: '#EEF2F7' }}>{h.name}</div>
                <div style={{ fontSize: 12, color: '#6B7480', marginTop: 3 }}>{h.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div style={{ flex: '1 1 340px', minWidth: 300 }}>
          <div className="section-label">// communication</div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', margin: '0 0 22px', color: '#EEF2F7' }}>Languages</h2>

          {profile.languages.map((lang, i) => (
            <div key={lang.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: i < profile.languages.length - 1 ? '1px solid #232B36' : 'none' }}>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: '#EAEEF4' }}>{lang.name}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#6B7480', marginTop: 3, letterSpacing: '0.03em' }}>{lang.proficiency}</div>
              </div>
              <LangDots level={lang.level} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
