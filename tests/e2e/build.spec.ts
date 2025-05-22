import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

const DIST_DIR = join(process.cwd(), 'dist')

describe('Build artifacts', () => {
  it('dist directory should exist', () => {
    expect(existsSync(DIST_DIR)).toBe(true)
  })

  it('should contain index.html file', () => {
    const indexPath = join(DIST_DIR, 'index.html')
    expect(existsSync(indexPath)).toBe(true)
    
    // Read the index.html file
    const indexContent = readFileSync(indexPath, 'utf-8')
    
    // Verify it contains expected elements
    expect(indexContent).toContain('<title>Harmash V')
    expect(indexContent).toContain('<html lang="en">')
    expect(indexContent).toContain('</body>')
  })

  it('should contain required assets and images', () => {
    // Check that the assets directory exists
    const assetsDir = join(DIST_DIR, 'assets')
    expect(existsSync(assetsDir)).toBe(true)
    
    // Check for favicon and other static assets
    expect(existsSync(join(DIST_DIR, 'favicon.ico'))).toBe(true)
    expect(existsSync(join(DIST_DIR, 'robots.txt'))).toBe(true)
    expect(existsSync(join(DIST_DIR, 'facepic.png'))).toBe(true)
    
    // Check that the assets directory isn't empty
    const assetsFiles = readdirSync(assetsDir)
    expect(assetsFiles.length).toBeGreaterThan(0)
    
    // Check for CSS and JS files in assets
    const hasCSS = assetsFiles.some(file => file.endsWith('.css'))
    const hasJS = assetsFiles.some(file => file.endsWith('.js'))
    
    expect(hasCSS).toBe(true)
    expect(hasJS).toBe(true)
  })

  it('should have correct content in robots.txt', () => {
    const robotsPath = join(DIST_DIR, 'robots.txt')
    expect(existsSync(robotsPath)).toBe(true)
    
    const robotsContent = readFileSync(robotsPath, 'utf-8')
    expect(robotsContent).toContain('User-agent:')
  })

  it('should have proper meta tags in index.html', () => {
    const indexPath = join(DIST_DIR, 'index.html')
    const indexContent = readFileSync(indexPath, 'utf-8')
    
    // Check for important meta tags
    expect(indexContent).toContain('<meta charset="')
    expect(indexContent).toContain('<meta name="viewport"')
    expect(indexContent).toContain('<link rel="icon"')
  })
})