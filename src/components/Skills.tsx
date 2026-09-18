import { BrainCircuit, Blocks, Cloud, Code2, ShieldCheck, Workflow } from 'lucide-react'
import { skillGroups } from '../data/skills'

const icons = { Code2, ShieldCheck, BrainCircuit, Cloud, Blocks, Workflow }
export function Skills() {
  return <section id="skills" className="section-pad ruled-section"><div className="section-heading"><div><p className="section-kicker">02 / toolkit</p><h2>Tools for the<br /><em>interesting problems.</em></h2></div><p>From detection logic to deployable interfaces, this is the working vocabulary behind the projects.</p></div><div className="skills-grid">{skillGroups.map((group) => { const Icon = icons[group.icon as keyof typeof icons]; return <article className="skill-card" key={group.label}><div className="skill-card-top"><Icon size={19} /><span>0{skillGroups.indexOf(group) + 1}</span></div><h3>{group.label}</h3><div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article> })}</div></section>
}