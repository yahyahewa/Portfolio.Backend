import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config()
export const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use the email service you want to use
  auth: {
    user: 'yahyahiwa3@gmail.com',
    pass: `${process.env.PASSWORD}`,
  },
});
