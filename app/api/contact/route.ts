import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  // TODO: implement email/notification logic
  console.log('Contact form submission:', body)
  return NextResponse.json({ success: true })
}
