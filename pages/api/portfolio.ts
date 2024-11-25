import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'

interface portfolio {
  _id: string;
  name: string;
  isShow: boolean;
  image: string;
  service: string;
}

type Data = {
  message: string
  data?: portfolio[] | string
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
      
      const data = await db.collection("portfolios")
        .find({ isShow: true })
        .limit(9)
        .toArray() as unknown as portfolio[]
      
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