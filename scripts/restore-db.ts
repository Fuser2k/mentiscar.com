import fs from "fs";
import path from "path";

const backupDir = path.join(process.cwd(), "backups");
const dbPath = path.join(process.cwd(), "sqlite.db");

function restore(filename: string) {
    if (!filename) {
        console.error("Please provide a backup filename.");
        console.log("Usage: npx tsx scripts/restore-db.ts sqlite-YYYY-MM-DD-HH-mm-ss.db");
        return;
    }

    const backupPath = path.join(backupDir, filename);

    if (!fs.existsSync(backupPath)) {
        console.error(`Backup file not found: ${backupPath}`);
        return;
    }

    fs.copyFileSync(backupPath, dbPath);
    console.log(`✅ Database restored from: ${filename}`);
}

const filename = process.argv[2];
restore(filename);
