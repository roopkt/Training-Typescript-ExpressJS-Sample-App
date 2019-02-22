export const userRoutes = (app: any) =>
  app
    .route('/api/user')
    .post((req: any, res: any) => res.send('POST SUCCESS'))
    .get((req: any, res: any) => res.send('GET SUCCESS'));
