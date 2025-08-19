import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(request, { params }) {
  try {
    const { path } = await params;
    const filePath = join(process.cwd(), 'locales', ...path);
    
    // Read the locale file
    const fileContent = readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading locale file:', error);
    return NextResponse.json(
      { error: 'Failed to load locale file' },
      { status: 500 }
    );
  }
}
