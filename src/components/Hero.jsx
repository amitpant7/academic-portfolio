import { profile } from '../data/profile'

function SocialBtn({ href, title, label, mail }) {
  return (
    <a
      href={href}
      title={title}
      target={mail ? undefined : '_blank'}
      rel={mail ? undefined : 'noopener noreferrer'}
      style={{ width: 38, height: 38, border: '1px solid #2A323D', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'IBM Plex Mono', monospace", fontSize: mail ? 15 : 12, fontWeight: 600, color: '#EAEEF4', textDecoration: 'none' }}
      className="hover:border-[#0EA5B5] hover:text-[#0EA5B5] transition-colors"
    >
      {label}
    </a>
  )
}

export default function Hero() {
  return (
    <section id="top" style={{ maxWidth: 1080, margin: '0 auto', padding: '74px 28px 78px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 54, alignItems: 'center' }}>

        {/* Left: intro */}
        <div style={{ flex: '1 1 380px', minWidth: 300 }}>
          <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[#0EA5B5] mb-4">
            // hello, world — I'm
          </div>

          <h1 className="font-display text-[58px] leading-[1.02] font-semibold tracking-[-0.03em] text-[#EEF2F7] mb-[18px]">
            Amit Raj<br />Pant
          </h1>

          <div className="text-[18px] font-semibold text-[#EAEEF4] mb-1">{profile.role}</div>
          <div className="font-mono text-[13.5px] text-[#0EA5B5] mb-5">{profile.tagline}</div>

          <p className="text-[15px] leading-[1.62] text-[#AEB7C2] mb-[22px] max-w-[480px]">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-[7px] mb-7">
            {profile.interests.map(i => (
              <span key={i} className="font-mono text-[11.5px] text-[#99A2AD] bg-[#161C24] border border-[#2A323D] rounded-[6px] px-[9px] py-[4px]">
                {i}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-[10px] flex-wrap">
            <SocialBtn href={`mailto:${profile.email}`} title="Email" label="@" mail />
            <SocialBtn href={profile.github}  title="GitHub"   label="GH" />
            <SocialBtn href={profile.linkedin} title="LinkedIn" label="in" />
            <a
              href={profile.cv}
              style={{ marginLeft: 6, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, fontWeight: 500, color: '#0C0F14', background: '#E8EDF3', padding: '9px 16px', borderRadius: 8, textDecoration: 'none' }}
              className="hover:bg-[#CED6DF] transition-colors"
            >
              <span style={{ color: '#0EA5B5' }}>↓</span> Download CV
            </a>
          </div>
        </div>

        {/* Right: code window */}
        <div style={{ flex: '1 1 380px', minWidth: 300 }}>
          <div style={{ borderRadius: 13, overflow: 'hidden', boxShadow: '0 24px 60px -24px rgba(13,17,23,0.45), 0 0 0 1px rgba(13,17,23,0.06)', background: '#0D1117' }}>
            {/* Title bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '13px 16px', borderBottom: '1px solid #1B222C' }}>
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F56', display: 'block' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FFBD2E', display: 'block' }} />
              <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#27C93F', display: 'block' }} />
              <span style={{ flex: 1, textAlign: 'right', fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#99A2AD' }}>amit_pant.py</span>
            </div>

            {/* Code */}
            <pre style={{ margin: 0, padding: '20px 22px 24px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, lineHeight: 1.72, color: '#C9D1D9', overflowX: 'auto' }}>
              <span style={{ color: '#6E7781' }}># ML Engineer · Computer Vision{'\n'}</span>
              <span style={{ color: '#FF7B72' }}>class </span>
              <span style={{ color: '#D2A8FF' }}>Profile</span>
              <span>:{'\n'}</span>
              {'    '}
              <span style={{ color: '#FF7B72' }}>def </span>
              <span style={{ color: '#D2A8FF' }}>__init__</span>
              <span style={{ color: '#FFA657' }}>(self)</span>
              <span>:{'\n'}</span>
              {'        self.name    = '}
              <span style={{ color: '#A5D6FF' }}>"Amit Raj Pant"</span>
              {'\n'}
              {'        self.role    = '}
              <span style={{ color: '#A5D6FF' }}>"Computer Vision Engineer"</span>
              {'\n'}
              {'        self.company = '}
              <span style={{ color: '#A5D6FF' }}>"Vision Intelligence Systems AG"</span>
              {'\n'}
              {'        self.focus   = ['}
              {'\n'}
              {'            '}
              <span style={{ color: '#A5D6FF' }}>"Computer Vision"</span>
              {',\n'}
              {'            '}
              <span style={{ color: '#A5D6FF' }}>"Deep Learning"</span>
              {',\n'}
              {'            '}
              <span style={{ color: '#A5D6FF' }}>"FPGA · Edge AI"</span>
              {',\n'}
              {'        ]\n'}
              {'        self.based   = '}
              <span style={{ color: '#A5D6FF' }}>"Nepal · Remote"</span>
              {'\n'}
              {'        self.open_to = '}
              <span style={{ color: '#A5D6FF' }}>"MS / PhD"</span>
              <span style={{ display: 'inline-block', width: 8, height: 16, background: '#0EA5B5', verticalAlign: -3, marginLeft: 4 }} className="animate-blink" />
            </pre>
          </div>
        </div>

      </div>
    </section>
  )
}
