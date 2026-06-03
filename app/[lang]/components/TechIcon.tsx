import Image from 'next/image'
import {
  siReact,
  siAngular,
  siTypescript,
  siJavascript,
  siPython,
  siCplusplus,
  siNextdotjs,
  siHtml5,
  siCss,
  siTailwindcss,
  siDotnet,
  siNodedotjs,
  siDjango,
  siPostgresql,
  siMysql,
  siSqlite,
  siMariadb,
  siDocker,
  siPodman,
  siGit,
  siLinux,
  siNginx,
  siPostman,
  siRider,
  siNeovim
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'

type IconEntry =
  | { type: 'si'; icon: SimpleIcon; color: string }
  | { type: 'img'; src: string }
  | { type: 'text'; abbr: string; color: string }

const TECH: Record<string, IconEntry> = {
  React: { type: 'si', icon: siReact, color: '#61DAFB' },
  'React Native': { type: 'si', icon: siReact, color: '#61DAFB' },
  Angular: { type: 'si', icon: siAngular, color: '#DD0031' },
  TypeScript: { type: 'si', icon: siTypescript, color: '#3178C6' },
  JavaScript: { type: 'si', icon: siJavascript, color: '#F7DF1E' },
  Python: { type: 'si', icon: siPython, color: '#3776AB' },
  'C++': { type: 'si', icon: siCplusplus, color: '#00599C' },
  'Next.js': { type: 'si', icon: siNextdotjs, color: '#FFFFFF' },
  HTML: { type: 'si', icon: siHtml5, color: '#E34F26' },
  CSS: { type: 'si', icon: siCss, color: '#663399' },
  'Tailwind CSS': { type: 'si', icon: siTailwindcss, color: '#06B6D4' },
  '.NET Core': { type: 'si', icon: siDotnet, color: '#7B5CE5' },
  '.NET Framework': { type: 'si', icon: siDotnet, color: '#9B7FEB' },
  'Node.js': { type: 'si', icon: siNodedotjs, color: '#5FA04E' },
  Django: { type: 'si', icon: siDjango, color: '#44B78B' },
  PostgreSQL: { type: 'si', icon: siPostgresql, color: '#4169E1' },
  MySQL: { type: 'si', icon: siMysql, color: '#4479A1' },
  SQLite: { type: 'si', icon: siSqlite, color: '#539AE2' },
  MariaDB: { type: 'si', icon: siMariadb, color: '#C17D3C' },
  Docker: { type: 'si', icon: siDocker, color: '#2496ED' },
  Podman: { type: 'si', icon: siPodman, color: '#892CA0' },
  Git: { type: 'si', icon: siGit, color: '#F03C2E' },
  Linux: { type: 'si', icon: siLinux, color: '#FCC624' },
  nginx: { type: 'si', icon: siNginx, color: '#009639' },
  Postman: { type: 'si', icon: siPostman, color: '#FF6C37' },
  Rider: { type: 'si', icon: siRider, color: '#FF318C' },
  Neovim: { type: 'si', icon: siNeovim, color: '#57A143' },

  // Custom icons — place file in /public/icons/ with the name below
  'C#': { type: 'img', src: '/icons/csharp.png' },
  SQL: { type: 'img', src: '/icons/sql.png' },
  'Entity Framework': { type: 'img', src: '/icons/entityframework.png' },
  'SQL Server': { type: 'img', src: '/icons/sqlserver.png' },
  Informix: { type: 'img', src: '/icons/informix.png' },
  Azure: { type: 'img', src: '/icons/azure.png' },
  AWS: { type: 'img', src: '/icons/aws.png' },
  'Visual Studio': { type: 'img', src: '/icons/visualstudio.png' },
  'VS Code': { type: 'img', src: '/icons/vscode.png' },
  'Azure DevOps': { type: 'img', src: '/icons/azuredevops.png' }
}

interface TechIconProps {
  name: string
  size?: number
}

export function TechIcon ({ name, size = 32 }: TechIconProps) {
  const entry = TECH[name]

  if (!entry) {
    return (
      <div
        style={{ width: size, height: size }}
        className="flex items-center justify-center rounded-md bg-zinc-700/50 text-zinc-400 text-xs font-bold"
      >
        {name.slice(0, 2)}
      </div>
    )
  }

  if (entry.type === 'si') {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        style={{ fill: entry.color, width: size, height: size, flexShrink: 0 }}
        aria-label={name}
      >
        <title>{name}</title>
        <path d={entry.icon.path} />
      </svg>
    )
  }

  if (entry.type === 'img') {
    return (
      <Image
        src={`${entry.src}`}
        alt={name}
        width={size}
        height={size}
        style={{ objectFit: 'contain' }}
        className={ name === 'AWS' ? 'bg-white/80 rounded-sm p-1' : ''}
      />
    )
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        color: entry.color,
        borderColor: `${entry.color}50`,
        backgroundColor: `${entry.color}18`
      }}
      className="flex items-center justify-center rounded-md border text-[10px] font-bold font-mono leading-tight text-center"
    >
      {entry.abbr}
    </div>
  )
}
