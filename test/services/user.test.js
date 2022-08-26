import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { registerUser } from "../../src/services/user/registerUser";
import { logInUser } from "../../src/services/user/loginUser";

const mongoServer = await MongoMemoryServer.create();

describe("User Services", () => {
  beforeAll(async function () {
    await mongoose.connect(mongoServer.getUri(), { dbName: "movies" });
  });

  it("Should register user", async () => {
    const userDetails = {
      email: "mikel@gmail.com",
      password: "Amis1#dun",
      firstName: "mikel",
      lastName: "dunamis",
    };
    const user = await registerUser(userDetails);
    expect(user.token).toBeDefined();
    expect(user.user).toBeDefined();
    expect(user.user.token).toBeDefined();
    expect(user.user.email).toBe("mikel@gmail.com");
  });

  it("Should login with valid user details", async () => {
    const userDetails = {
      email: "dunamis@gmail.com",
      password: "Amis1#dun",
      firstName: "mikel",
      lastName: "dunamis",
    };
    await registerUser(userDetails);
    const response = await logInUser({
      email: userDetails.email,
      password: "Amis1#dun",
    });
    expect(response.token).toBeDefined();
    expect(response._id).toBeDefined();
  });

  afterAll(async function () {
    await mongoose.disconnect();
  });
});
