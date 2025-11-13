import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Delight Consultancy'
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0078D7',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'system-ui',
          }}
        >
          D
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

