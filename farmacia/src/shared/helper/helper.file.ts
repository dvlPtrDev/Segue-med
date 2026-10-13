import { writeFile } from "node:fs/promises";

export default class FileHelper {
    private FILE_DIR = "/uploads";

    async saveFileByBuffer(filename: string, content: Buffer) {
        await writeFile(`${this.FILE_DIR}/${filename}`, content);
    }
}