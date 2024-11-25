import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'

interface Career {
  _id: string;
  name: string;
  isShow: boolean;
  qualifications: string[];
  responsibilities: string[];
}

type Data = {
  message: string
  data?: Career[] | string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const client = await clientPromise
    const db = client.db("atmosph_website")
    
    if (req.method === 'GET') {
      await client.db("admin").command({ ping: 1 })
      
      const data = await db.collection("careers")
        .find({ isShow: true })
        .toArray() as unknown as Career[]
      
      res.status(200).json({ 
        message: 'เชื่อมต่อและดึงข้อมูลสำเร็จ',
        data: data 
      })
    } else {
      res.status(405).json({ message: 'Method Not Allowed' })
    }
  } catch (error) {
    console.error('MongoDB Error:', error)
    res.status(500).json({ 
      message: 'เกิดข้อผิดพลาดในการเชื่อมต่อกับฐานข้อมูล',
      data: error instanceof Error ? error.message : 'Unknown error'
    })
  }
} 