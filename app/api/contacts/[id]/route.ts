// app/api/contacts/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
 

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  createdAt: string | Date;
}

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET: Fetch single contact by ID
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;
    
    const [rows] = await pool.query(
      'SELECT id, name, email, phone, message, createdAt FROM contacts WHERE id = ?',
      [id]
    ) as [Contact[], any];

    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('GET contact error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact' },
      { status: 500 }
    );
  }
}

// DELETE: Remove contact by ID
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const { id } = await params;

    const [result] = await pool.execute(
      'DELETE FROM contacts WHERE id = ?',
      [id]
    );

    // @ts-expect-error - mysql2 returns affectedRows in result
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE contact error:', error);
    return NextResponse.json(
      { error: 'Failed to delete contact' },
      { status: 500 }
    );
  }
}