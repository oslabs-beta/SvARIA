
import {
    HumanMessage,
  } from "@langchain/core/messages";

const chat_history = {}

const chatbotRoute = async (ragChain, req, res) => {
    let currentUser;
    let userChatHistory;
  
    if (req.cookies.svariauser) {
      currentUser = req.cookies.svariauser
    }
    else {
      currentUser = Math.random().toString(36).slice(2)
      res.cookie('svariauser', currentUser)
    }
  
    if (chat_history[currentUser] && chat_history[currentUser].length != 0 ) {
      userChatHistory = chat_history[currentUser]
    }
    else {
      userChatHistory = []
    }
    console.log(chat_history)
    const question = req.body.question
    const aiMsg = await ragChain.invoke({ question, chat_history: userChatHistory });
    
    userChatHistory.push(new HumanMessage(question))
    userChatHistory.push(aiMsg);
    chat_history[currentUser] = userChatHistory
    console.log(aiMsg.content)
  
    return res.status(200).send({ "response": aiMsg.content })
  }

  export default chatbotRoute