import { readFileSync, existsSync, mkdirSync, readdirSync, copyFileSync, cpSync } from 'node:fs'
import { parse, join } from 'node:path'
import { minimatch } from 'minimatch'
import toml from '@iarna/toml'

try {
  const { base } = parse(process.cwd())
  const { version } = JSON.parse(readFileSync('manifest.json', 'utf8'))

  const outdir = 'release'
  const releaseDir = join(outdir, `${base}-${version}`)
  const tomlData = toml.parse(readFileSync('pack.toml', 'utf8'))
  const ignoreEntries = tomlData.ignore || []

  if (!existsSync(outdir)) mkdirSync(outdir, { recursive: true })

  readdirSync(process.cwd(), { withFileTypes: true }).forEach(entry => {
    const entryPath = join(process.cwd(), entry.name)
    const isIgnored = ignoreEntries.some(ignoreEntry =>
      ignoreEntry.startsWith('/')
        ? entryPath === join(process.cwd(), ignoreEntry)
        : minimatch(entry.name, ignoreEntry)
    )

    if (!isIgnored) {
      entry.isDirectory()
        ? cpSync(entryPath, join(releaseDir, entry.name), { recursive: true })
        : copyFileSync(entryPath, join(releaseDir, entry.name))
    }
  })

  console.log(`Success! Copied files and folders to ${releaseDir} directory.`)
} catch (e) {
  console.error('Error! Failed to copy files and folders.', e)
}