import emailjs from '@emailjs/browser';

// No need to initialize here since we'll do it in the component
interface EmailData {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
};

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      data,
      emailConfig.publicKey
    );
    return response;
  } catch (error) {
    throw error;
  }
};
