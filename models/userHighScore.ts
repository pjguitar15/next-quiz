import mongoose, { Schema, Document } from 'mongoose'

interface IUserHighScore extends Document {
  username: string;
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

const userHighScoreSchema: Schema<IUserHighScore> = new Schema<IUserHighScore>(
  {
    username: { type: String, required: true },
    score: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)

const UserHighScore =
  (mongoose.models.UserHighScore as mongoose.Model<IUserHighScore>) ||
  mongoose.model<IUserHighScore>('UserHighScore', userHighScoreSchema)

export default UserHighScore
