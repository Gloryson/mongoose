import { Document, model, Schema } from 'mongoose';


export type TypeTest = {
  name: string;
  age: string;
  other: string[];
}


export interface ITest extends TypeTest, Document {}


const testSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: String,
    required: true,
  },
  other: {
    type: [String],
    required: true,
  }
}, {
  versionKey: false
});


export const Test = model<ITest>('test', testSchema);