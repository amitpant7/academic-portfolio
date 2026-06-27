import { profile } from '../data/profile'

const IconEye = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="6.5" /><circle cx="12" cy="12" r="2.4" />
    <line x1="12" y1="2.2" x2="12" y2="4.4" /><line x1="12" y1="19.6" x2="12" y2="21.8" />
    <line x1="2.2" y1="12" x2="4.4" y2="12" /><line x1="19.6" y1="12" x2="21.8" y2="12" />
  </svg>
)

const IconChip = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7.5" y="7.5" width="9" height="9" rx="1" /><rect x="10.5" y="10.5" width="3" height="3" />
    <line x1="9.5" y1="4.5" x2="9.5" y2="7.5" /><line x1="12" y1="4.5" x2="12" y2="7.5" /><line x1="14.5" y1="4.5" x2="14.5" y2="7.5" />
    <line x1="9.5" y1="16.5" x2="9.5" y2="19.5" /><line x1="12" y1="16.5" x2="12" y2="19.5" /><line x1="14.5" y1="16.5" x2="14.5" y2="19.5" />
    <line x1="4.5" y1="9.5" x2="7.5" y2="9.5" /><line x1="4.5" y1="12" x2="7.5" y2="12" /><line x1="4.5" y1="14.5" x2="7.5" y2="14.5" />
    <line x1="16.5" y1="9.5" x2="19.5" y2="9.5" /><line x1="16.5" y1="12" x2="19.5" y2="12" /><line x1="16.5" y1="14.5" x2="19.5" y2="14.5" />
  </svg>
)

const IconGraph = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="11.5" y1="11.5" x2="6" y2="6.8" /><line x1="11.5" y1="12.5" x2="6" y2="17.2" />
    <line x1="13.2" y1="12" x2="17.3" y2="12" />
    <circle cx="5.5" cy="6.5" r="2" /><circle cx="5.5" cy="17.5" r="2" /><circle cx="18" cy="12" r="2" />
    <circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none" />
  </svg>
)

const IconGrad = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4.5 L22 9 L12 13.5 L2 9 Z" />
    <path d="M6 10.7 V15 C6 15 8.5 17.5 12 17.5 C15.5 17.5 18 15 18 15 V10.7" />
    <line x1="22" y1="9" x2="22" y2="13.5" />
  </svg>
)

const iconMap = { eye: <IconEye />, chip: <IconChip />, graph: <IconGraph /> }

function IconBox({ icon }) {
  return (
    <div style={{ width: 44, height: 44, borderRadius: 11, background: '#1B2230', color: '#0EA5B5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {iconMap[icon]}
    </div>
  )
}

function Bullet({ text }) {
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 5 }}>
      <span style={{ color: '#0EA5B5', flexShrink: 0, fontFamily: "'IBM Plex Mono', monospace", fontSize: 13 }}>–</span>
      <span style={{ fontSize: 13.5, color: '#AEB7C2', lineHeight: 1.55 }}>{text}</span>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" style={{ background: '#11161D', borderTop: '1px solid #232B36', borderBottom: '1px solid #232B36' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '62px 28px 70px' }}>
        <div className="section-label">// career</div>
        <h2 className="section-title">Experience &amp; Education</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>

          {/* Work timeline */}
          <div style={{ flex: '1 1 460px', minWidth: 320, order: 1 }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B7480', marginBottom: 20 }}>work_experience[]</div>

            {profile.work.map((job, i) => {
              const isLast = i === profile.work.length - 1

              if (job.grouped) {
                return (
                  <div key={job.company} style={{ display: 'flex', gap: 16 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <IconBox icon={job.icon} />
                      {!isLast && <div style={{ width: 2, flex: 1, background: '#2A323D', marginTop: 8 }} />}
                    </div>
                    <div style={{ flex: 1, paddingBottom: isLast ? 0 : 30 }}>
                      <div className="font-display text-[17px] font-semibold text-[#EEF2F7]">{job.company}</div>
                      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#6B7480', marginTop: 3, marginBottom: 14 }}>Full-time · {job.duration}</div>

                      {/* Nested roles with dashed line */}
                      <div style={{ position: 'relative', paddingLeft: 22 }}>
                        <div style={{ position: 'absolute', left: 5, top: 6, bottom: 8, borderLeft: '2px dashed #313A45' }} />

                        {job.roles.map((role, ri) => {
                          const isLastRole = ri === job.roles.length - 1
                          return (
                            <div key={role.title} style={{ position: 'relative', marginBottom: isLastRole ? 0 : 18 }}>
                              <div style={{ position: 'absolute', left: -22, top: 3, width: 13, height: 13, borderRadius: '50%', background: '#11161D', border: `2px solid ${isLastRole ? '#46505C' : '#0EA5B5'}` }} />
                              <div style={{ fontSize: 14.5, fontWeight: 600, color: '#EAEEF4' }}>
                                {role.title}
                                {role.type && <span style={{ fontWeight: 400, color: '#6B7480' }}> · {role.type}</span>}
                              </div>
                              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: '#6B7480', marginTop: 2, marginBottom: 8 }}>{role.period} · {role.duration}</div>
                              {role.bullets.map((b, bi) => (
                                <div key={bi} style={{ display: 'flex', gap: 8, marginBottom: 5 }}>
                                  <span style={{ color: '#0EA5B5', flexShrink: 0, fontFamily: "'IBM Plex Mono', monospace", fontSize: 13 }}>–</span>
                                  <span style={{ fontSize: 13, color: '#AEB7C2', lineHeight: 1.55 }}>{b}</span>
                                </div>
                              ))}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <div key={job.company + job.title} style={{ display: 'flex', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <IconBox icon={job.icon} />
                    {!isLast && <div style={{ width: 2, flex: 1, background: '#2A323D', marginTop: 8 }} />}
                  </div>
                  <div style={{ flex: 1, paddingBottom: isLast ? 0 : 30 }}>
                    <div className="font-display text-[17px] font-semibold text-[#EEF2F7]">{job.title}</div>
                    <div style={{ fontSize: 13.5, color: '#C2CAD4', marginTop: 1 }}>{job.company} · {job.type}</div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#6B7480', marginTop: 3 }}>{job.period} · {job.duration}</div>
                    {job.location && <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#6B7480' }}>{job.location}</div>}
                    <div style={{ marginTop: 11 }}>
                      {job.bullets.map((b, bi) => <Bullet key={bi} text={b} />)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Education */}
          <div style={{ flex: '0 1 300px', minWidth: 260, order: 2 }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B7480', marginBottom: 20 }}>education[]</div>
            {profile.education.map((edu, i) => (
              <div key={i} style={{ background: '#151B23', border: '1px solid #232B36', borderRadius: 13, padding: 20 }}>
                <div style={{ display: 'flex', gap: 13 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: '#1B2230', color: '#0EA5B5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <IconGrad />
                  </div>
                  <div>
                    <div className="font-display text-[15.5px] font-semibold text-[#EEF2F7] leading-snug">{edu.degree}</div>
                    <div style={{ fontSize: 13, color: '#C2CAD4', marginTop: 3 }}>{edu.institution}</div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: '#6B7480', marginTop: 4 }}>{edu.period}</div>
                  </div>
                </div>
                <div style={{ height: 1, background: '#232B36', margin: '15px 0' }} />
                <p style={{ fontSize: 13, color: '#99A2AD', lineHeight: 1.6, margin: 0 }}>{edu.summary}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
