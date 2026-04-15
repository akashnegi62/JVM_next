// app/api/contacts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import pool from '@/lib/db';
import { CreateContactInput } from '@/types/contact';


 
// GET: List all contacts (admin only - add auth proxy in production)
export async function GET() {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, email, phone, message, createdAt FROM contacts ORDER BY createdAt DESC'
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error('GET contacts error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}

// POST: Create new contact submission
export async function POST(request: NextRequest) {
  try {
    const body: CreateContactInput = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const id = randomUUID();
    
    // Parameterized query to prevent SQL injection [[21]]
    await pool.execute(
      'INSERT INTO contacts (id, name, email, phone, message) VALUES (?, ?, ?, ?, ?)',
      [id, body.name, body.email, body.phone || null, body.message]
    );

    return NextResponse.json(
      { success: true, id },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST contact error:', error);
    return NextResponse.json(
      { error: 'Failed to save contact' },
      { status: 500 }
    );
  }
}