export default () => ({
  jwtKey: process.env.JWT_KEY || 'example key',
  databaseUrl: process.env.DATABASE_UR,
  mail: {
    host: process.env.Mail_HOST,
    port: process.env.Mail_PORT,
    user: process.env.Mail_USER,
    pass: process.env.Mail_PASS,
  },
});
