import { useState } from 'react'
import { profile } from '../data/profile'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Awards',     href: '#awards' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(12,15,20,0.78)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #232B36' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" className="font-mono font-semibold text-[15px] text-[#EAEEF4] no-underline tracking-[-0.01em]">
          amit<span className="text-[#0EA5B5]">.pant</span>
          <span className="text-[#0EA5B5] animate-blink">_</span>
        </a>

        <nav className="hidden md:flex items-center gap-[26px]">
          {links.map(l => (
            <a key={l.href} href={l.href} className="font-mono text-[13px] text-[#99A2AD] no-underline hover:text-[#EAEEF4] transition-colors">
              {l.label}
            </a>
          ))}
          <a href={profile.cv} className="font-mono text-[13px] font-medium text-[#0C0F14] bg-[#E8EDF3] px-[15px] py-[7px] rounded-[7px] no-underline hover:bg-[#CED6DF] transition-colors">
            Resume
          </a>
        </nav>

        <button className="md:hidden p-2 text-[#99A2AD] hover:text-[#EAEEF4]" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#11161D] border-b border-[#232B36] px-7 pb-4 pt-2 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-mono text-[13px] text-[#99A2AD] hover:text-[#EAEEF4] py-1 no-underline transition-colors">
              {l.label}
            </a>
          ))}
          <a href={profile.cv} className="font-mono text-[13px] font-medium text-[#0C0F14] bg-[#E8EDF3] px-[15px] py-[7px] rounded-[7px] no-underline text-center">
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
