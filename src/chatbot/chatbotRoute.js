
// import {
//     HumanMessage,
//   } from "@langchain/core/messages";

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
    //console.log(req)
    console.log(req.body)
    const question = req.body.question
    console.log("question is ", question)
    const aiMsg = await ragChain.invoke({ question, chat_history: userChatHistory });
    
    //userChatHistory.push(new HumanMessage(question))
    userChatHistory.push(aiMsg);
    chat_history[currentUser] = userChatHistory
    console.log(aiMsg.content)

    // res.set({
    //   'Content-Type': 'application/json; charset=utf-8',
    // })
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type')
    return res.json({ "response": aiMsg.content })
  }

  export default chatbotRoute