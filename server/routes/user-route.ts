import { addUserToDb } from '../controllers/add-user-to-db';

export const userRoutes = (app: any) =>
  app
    .route('/api/user')
    .post(addUserToDb)
    .get((req: any, res: any) => res.send('GET SUCCESS'));
