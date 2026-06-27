import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #232B36', background: '#0C0F14' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '24px 28px', display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: '#6B7480' }}>
          © {new Date().getFullYear()} Amit Raj Pant · Nepal
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href={`mailto:${profile.email}`} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: '#99A2AD', textDecoration: 'none' }} className="hover:text-[#0EA5B5] transition-colors">
            Email
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: '#99A2AD', textDecoration: 'none' }} className="hover:text-[#0EA5B5] transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: '#99A2AD', textDecoration: 'none' }} className="hover:text-[#0EA5B5] transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
