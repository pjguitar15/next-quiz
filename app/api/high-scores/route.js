import connectMongoDB from '@/libs/mongodb.ts'
import UserHighScore from '@/models/userHighScore.ts'
import { NextResponse } from 'next/server'

export const POST = async (request) => {
  const { username, score } = await request.json()
  await connectMongoDB()
  await UserHighScore.create({ username, score })
  return NextResponse.json({ message: 'User High Score created.' }, { status: 201 })
}

// 'GET' function to handle the HTTP GET request.
export async function GET() {
  // Establish a connection to the MongoDB database.
  await connectMongoDB();
  // Query all 'Todo' documents from the MongoDB collection using the 'Todo' model.
  const userHighScore = await UserHighScore.find();
  // Return a JSON response with the queried 'todos' array using the 'NextResponse' object.
  return NextResponse.json({ userHighScore });
}