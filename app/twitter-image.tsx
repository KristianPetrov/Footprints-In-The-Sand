import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Footprints In The Sand 2 Recovery - Where Broken Roads Become Steady Ground'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function TwitterImage ()
{
  const logoData = await readFile(
    join(process.cwd(), 'public', 'footprints-in-the-sand-minimal-logo.png')
  )
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #03171d 0%, #0f2f38 30%, #1c5a6b 70%, #174652 100%)',
          padding: 60,
        }}
      >
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt=""
          width={200}
          height={200}
          style={{
            objectFit: 'contain',
            marginBottom: 30,
          }}
        />

        {/* Site Name */}
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontWeight: 600,
            color: '#f7c99b',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Footprints In The Sand 2 Recovery
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 52,
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Where Broken Roads Become Steady Ground
        </div>

        {/* Description */}
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            color: 'rgba(255, 255, 255, 0.85)',
            textAlign: 'center',
            lineHeight: 1.5,
            maxWidth: 800,
            marginBottom: 30,
          }}
        >
          Evidence-based PHP & IOP programming for addiction and mental health recovery in Costa Mesa, CA
        </div>

        {/* Contact Info */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            fontSize: 18,
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          <span>📞 949-350-1078</span>
          <span>📍 Costa Mesa, CA</span>
          <span>✉️ info@footprintsrecovery.net</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}















