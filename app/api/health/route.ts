import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const conn = await pool.getConnection();
    await conn.ping();
    conn.release();
    
    return NextResponse.json({ 
      status: 'ok', 
      database: 'connected',
      url: process.env.DATABASE_URL ? 'set' : 'missing'
    });
  } catch (error: any) {
    return NextResponse.json(
      { 
        status: 'error', 
        database: 'disconnected', 
        error: error.message || String(error),
        code: error.code
      },
      { status: 500 }
    );
  }
}