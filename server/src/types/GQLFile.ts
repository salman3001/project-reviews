export type GQLFile = Promise<{
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: any;
}>;
