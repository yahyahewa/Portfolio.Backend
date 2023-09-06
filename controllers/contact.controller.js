import Contac from "../models/contact.models.js";
import xss from "xss";
import { tryCatch } from "../utils/tryCatch.js";
import { transporter } from "../utils/nodemailerConfig.js";
import CustomError from "../CustomError.js";

const saveMessage = tryCatch(async (req, res) => {
  const { email, message,fullname } = req.body;
  if (!email || !message || !fullname) {
    throw new CustomError("Missing required fields", 400, 5000);
  }
  if(message.lenght>300){
    throw new CustomError("Please Fill 300 charcter", 400, 5000);
  }
  const sanitizedFullname = sanitizeInput(fullname);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedMessage = sanitizeInput(message);

  await Contac.create({
    fullname:sanitizedFullname,
    email: sanitizedEmail,
    message: sanitizedMessage,
  });

  await transporter.sendMail({
    from: "yahyahiwa3@gmail.com",
    to: sanitizedEmail.trim(),
    subject:"Feedback Response",
    text: "Thanks for giving us a feedback. Our customer service team will contact you as soon as possible!",
  });

  res.status(200).json({ status: "success" });
});

function sanitizeInput(input) {
  return xss(input);
}

export { saveMessage };
