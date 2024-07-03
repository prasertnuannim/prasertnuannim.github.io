// pages/api/sendMessage.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {name, telephone, message} = req.body
    const accessToken = 'SsTBlISxk74qB2Cl7WtQIvzRWfiaNyNYOQ44U3leuNG';
    try {
      const response = await axios.post(
        'https://notify-api.line.me/api/notify',
        `message=\nName : ${name}\nTel : ${telephone}\nMessage : ${message}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log('Line Notify response:', response.data);
      res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error:any) {
      console.error('Error sending Line Notify message:', error.message);
      res.status(500).json({ success: false, message: 'Failed to send message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
