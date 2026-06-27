import { profile } from '../data/profile'

const IconTrophy = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4 H17 V9 C17 12 14.5 13.5 12 13.5 C9.5 13.5 7 12 7 9 Z" />
    <path d="M7 5.5 H4.5 V7 C4.5 9 6 9.5 7.2 9.5" />
    <path d="M17 5.5 H19.5 V7 C19.5 9 18 9.5 16.8 9.5" />
    <line x1="12" y1="13.5" x2="12" y2="16.8" />
    <path d="M8.5 20 H15.5 L14.5 16.8 H9.5 Z" />
  </svg>
)

const IconTarget = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 11 L7 3.5" /><path d="M14.5 11 L17 3.5" />
    <path d="M10.2 4 L12 8 L13.8 4" />
    <circle cx="12" cy="15" r="4.5" />
    <circle cx="12" cy="15" r="1.3" fill="currentColor" stroke="none" />
  </svg>
)

const IconChart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4.5" y="12" width="3.4" height="7.5" rx="0.6" />
    <rect x="10.3" y="7" width="3.4" height="12.5" rx="0.6" />
    <rect x="16.1" y="14" width="3.4" height="5.5" rx="0.6" />
  </svg>
)

const IconCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 8 L4.5 12 L8.5 16" />
    <path d="M15.5 8 L19.5 12 L15.5 16" />
    <line x1="13.5" y1="6" x2="10.5" y2="18" />
  </svg>
)

const iconMap = { trophy: <IconTrophy />, target: <IconTarget />, chart: <IconChart />, code: <IconCode /> }

export default function Awards() {
  return (
    <section id="awards" style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 28px 68px' }}>
      <div className="section-label">// recognition</div>
      <h2 className="section-title">Awards</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
        {profile.awards.map((award, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, border: '1px solid #232B36', borderRadius: 13, padding: '18px 20px', background: '#151B23' }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(14,165,181,0.10)', color: '#0EA5B5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {iconMap[award.icon]}
            </div>
            <div>
              <div style={{ fontSize: 14.5, fontWeight: 600, color: '#EEF2F7' }}>{award.title}</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: '#0EA5B5', marginTop: 3 }}>{award.awarder} · {award.date}</div>
              <p style={{ fontSize: 12.5, color: '#99A2AD', lineHeight: 1.55, margin: '7px 0 0' }}>{award.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
