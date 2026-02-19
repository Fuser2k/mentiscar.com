import fs from "fs";
import path from "path";

const backupDir = path.join(process.cwd(), "backups");
const dbPath = path.join(process.cwd(), "sqlite.db");

function backup() {
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir);
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(backupDir, `sqlite-${timestamp}.db`);

    fs.copyFileSync(dbPath, backupPath);
    console.log(`✅ Backup created: ${backupPath}`);
}

backup();
