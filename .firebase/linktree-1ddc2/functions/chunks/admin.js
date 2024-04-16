import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "linktree-1ddc2";
const FB_CLIENT_EMAIL = "firebase-adminsdk-l29hb@linktree-1ddc2.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDF/9FtEdGEvp+/\nOnaTjEa2b6UwGddKP21P/+pEx9xVIOWdtJiR4ALxc4CugS5Ea6SXtu+iIKKuY4bf\nk2WHu2+s/Vs5IYBtW6Hixmws/zUfKGaYDiLlPodzD4ELE/QXzmNalDzURUHfr2Dc\neOw+bxfs74JIHzUnIHFGjxqVdZRGpQEK2CD8seRIWvs0odt+iLamf4nRyWTFp/7w\nZvl6Cg1lCc0cNQiYZ2qsmClQDKpD7sUF1keLy58x9f5+O9oJCAlEjlid8g+YTzRS\nMF0j+u3IribeF5auQ5f0lw9xuw4KhnmSacdaXN/6VjamcfmhTGwj5hBxiqSJo34C\n1zDHJYR7AgMBAAECggEAHtkI5V/Rz0ctt0rh/4Hq4HCLgW99Oc2g98ZM1vN2cfLi\no0voO031121h3o40yaclqRdwxUclYVsTP9EEj/2VXBPK+x8rlZ4hniXA48/NFHIk\nbctCB4pS6wu+1J2CuZTHqOyQf5fct/9obWEPmXiQdzMnjpoCG3rz+wS/pQqBE/JK\nCzOBNznrXMqsJA4cAZPL2N+qRa/UG/8PUApM8wZ1Y+BuK/9DO5c6IpldTOrNGAfI\ncGv4C23fuFXVCCJiKqzTa7lydksn+el3CpKYjhH5lAcz853VKlQjuC26h4mn8PFO\nzlLSfjactEx3BUMBVz6CqNpvOLMYnHILaNuecHU/oQKBgQDj31xv8BrL3MGC4pXc\n5S0CHDNzGH2glOcPoIXtXRQn58LXHPJz26XCPgp4UyviCPsbjHtKHKDbi6GuIWNu\nq0LlMB9MXa/khxG5lomd156VXowCIcdAltb7cMS+visHHnV53qVL3zz9A6sj73PU\n8exIA+612cms2BP5FHGfKqgWmwKBgQDecHsRHsOiTLwVeuVRrwnCMBMSI6mREpMy\nAGwfjGit4h9IbIOTMvXj6FRNtQ5c+bq/sgiUEh0O/I0rJM+i9mXAUO+2v6j4W2fA\nm75WR3IhIVd1yT5z5flkCCEGN7npJXm+j69zi3GmMNGtJDtXkBoHbuDzMQmU25pU\nOxrCIvw3oQKBgCCkYm12i6AgY2gIZUdbXPMsbwJRw805B1BpwkWaS8TbokGGWATY\ntgn5MS7DW0np126+1Pps124btnFnPwMfbVm/Zvxdf1DROGzJb7U4qfLjtFKp3A0Y\njns+UDCytR8z8cgfaLZRqD7mQ6HGL2WVsi8uwQczx3wHB/VqREx0o9d5AoGBANY/\n2QnAbAajinXWDZMD2Y5k57mNCAJntcdviLVKdHknV6JWgtUBPL3sRWcjgVYkY6/I\nN2MHn12T/BUWO7hnQ9JdIscPDB1LTT/Dwy0vW8p1ZtxYngLb+75R5h0rB7J9Gipm\nE0Rjh2/fjdYLE+1fKvMF5T3YebYbXybKVxeuwuiBAoGBAMEEvDDKhpLQYevv+mpT\nur5dNDGqIP/SqkbLUPf++B5lbvX03h9bqGv/JoGgrC80rVYAh+6CXyKnSYLDPE7g\nD5JHMHzMOmDOSQdoF7SCdH5GflzjUqUyDjIDT3iqk7fIv3/9aJv7ZGGdwLLM920p\nfF1S2ysMgm3LPGqshCibRgqv\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
