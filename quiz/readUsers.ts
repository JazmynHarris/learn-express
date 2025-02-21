import express, { Response } from 'express';
import { UserRequest } from './types';

const router = express.Router();

// Define the about route
router.get('/usernames', (req: UserRequest, res: Response) => {
    let usernames = req.users?.map((user) => {
        return { id: user.id, username: user.username };
    });
    res.send(usernames);
});

// Define the home page route
router.get('/username/:name', (req: UserRequest, res: Response) => {
    const name = req.params.name;

    const user = req.users?.find((user) => user.username === name);

    res.send([{ email: user?.email }]);
});


export default router;