import { NextApiRequest, NextApiResponse } from 'next'
import { Media } from 'tinacms';

const createMediaHandler = () => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        if (req.method === 'GET') {
            return listMedia(req, res);
        }

        return res.json({});
    }
}

async function listMedia(req: NextApiRequest, res: NextApiResponse) {

    const parsedRes: Media = {
        type: 'file',
        id: "123",
        filename: "Kris.jpg",
        directory: '/',
        thumbnails: {
            '75x75': "https://cdn.create.vista.com/downloads/f34f4d95-d62c-4e35-b01e-1af39f6beb47_1024.jpeg",
            '400x400': "https://cdn.create.vista.com/downloads/f34f4d95-d62c-4e35-b01e-1af39f6beb47_1024.jpeg",
            '1000x1000': "https://cdn.create.vista.com/downloads/f34f4d95-d62c-4e35-b01e-1af39f6beb47_1024.jpeg",
        },
        src: "https://cdn.create.vista.com/downloads/f34f4d95-d62c-4e35-b01e-1af39f6beb47_1024.jpeg",
    }

    const files = [
        parsedRes,
        parsedRes,
        parsedRes,
    ];
    res.status(200).json({
        items: files,
        offset: 10
    });
}

export default createMediaHandler()
