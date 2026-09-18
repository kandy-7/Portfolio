import { ArrowDownRight, ArrowRight, Link2, Terminal } from 'lucide-react'
import { profile } from '../data/profile'
import { TalkingAvatar } from './TalkingAvatar'

export function Hero() {
  return <section id="home" className="hero section-pad">
    <div className="hero-copy reveal">
      <div className="status-line"><span className="live-dot" /> SYSTEM_STATUS: ONLINE</div>
      <p className="hero-name">{profile.name}</p>
      <h1>Engineering <em>secure systems</em> with Python, AI &amp; Cloud</h1>
      <p className="hero-description">Final-year engineering student focused on cybersecurity, Python, AI, cloud computing and software engineering.</p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowRight size={17} /></a><a className="button button-ghost" href="#contact">Contact me <ArrowDownRight size={17} /></a></div>
      <div className="hero-socials"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Link2 size={16} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Link2 size={16} /> LinkedIn</a><a href={`mailto:${profile.email}`}><Link2 size={16} /> Email</a></div>
    </div>
    <div className="hero-side reveal-delay"><TalkingAvatar /><div className="terminal-readout"><span><Terminal size={14} /> ./current_focus</span><strong>SECURITY <i>/</i> SYSTEMS <i>/</i> AUTOMATION</strong></div></div>
  </section>
}