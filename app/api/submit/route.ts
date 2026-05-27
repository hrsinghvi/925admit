import { NextResponse } from 'next/server'

const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL

export async function POST(request: Request) {
  try {
    const data = await request.json()

    if (GOOGLE_SHEETS_URL) {
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } else {
      console.log('[submit] No GOOGLE_SHEETS_WEBHOOK_URL set. Data:', JSON.stringify(data, null, 2))
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }
}
