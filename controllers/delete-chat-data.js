import prisma from "../lib/prisma.js";

async function deleteChatData() {
  try {
    const result = await prisma.chat.deleteMany();

    console.log('Data deleted successfully:', result);
  } catch (error) {
    console.error('Error deleting data from the Chat collection:', error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteChatData();
//node delete-chat-data.js