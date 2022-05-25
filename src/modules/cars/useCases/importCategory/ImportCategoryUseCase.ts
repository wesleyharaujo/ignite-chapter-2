import fs from "fs";

class ImportCategoryUseCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    // stream.pipe();
  }
}

export { ImportCategoryUseCase };
