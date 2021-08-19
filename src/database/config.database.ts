import { connect } from "mongoose";

const URI: string = "mongodb://localhost/notes";

export const connection = async () => {
  try {
    await connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database is Connected");
  } catch (error) {
    console.error(error);
  }
};
