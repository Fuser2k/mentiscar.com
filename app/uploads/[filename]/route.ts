import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ filename: string }> }
) {
    try {
        const { filename } = await params;

        // Security: only allow safe filenames (UUID.webp or UUID.jpg etc.)
        if (!/^[a-f0-9\-]+\.(webp|jpg|jpeg|png|gif)$/i.test(filename)) {
            return new NextResponse('Not found', { status: 404 });
        }

        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        const filePath = path.join(uploadDir, filename);

        // Prevent path traversal
        if (!filePath.startsWith(uploadDir)) {
            return new NextResponse('Forbidden', { status: 403 });
        }

        const fileBuffer = await readFile(filePath);

        const ext = filename.split('.').pop()?.toLowerCase();
        const contentTypeMap: Record<string, string> = {
            webp: 'image/webp',
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            png: 'image/png',
            gif: 'image/gif',
        };
        const contentType = contentTypeMap[ext ?? ''] ?? 'application/octet-stream';

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch {
        return new NextResponse('Not found', { status: 404 });
    }
}
