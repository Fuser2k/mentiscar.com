import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());

        // Security: Use sharp to validate that it is indeed an image
        // This will throw if the buffer is not a supported image format
        let imagePipeline = sharp(buffer);

        // Security: Retrieve metadata to check size/format before processing
        const metadata = await imagePipeline.metadata();

        // Enforce max dimension to prevent DoS (e.g. decompression bombs)
        if (metadata.width && metadata.width > 4000) {
            imagePipeline = imagePipeline.resize({ width: 4000, withoutEnlargement: true });
        }

        // Security: Re-encode image to strip metadata (EXIF) and ensure clean file
        // Convert to WebP for performance and standardization
        const processedImageBuffer = await imagePipeline
            .webp({ quality: 80 })
            .toBuffer();

        const filename = `${uuidv4()}.webp`;
        const uploadDir = path.join(process.cwd(), "public/uploads");

        // Ensure directory exists
        try {
            await mkdir(uploadDir, { recursive: true });
        } catch (error) {
            // Ignore error if it exists
        }

        await writeFile(path.join(uploadDir, filename), processedImageBuffer);

        return NextResponse.json({ url: `/uploads/${filename}` });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed or invalid file type" }, { status: 500 });
    }
}
