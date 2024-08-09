import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { SystemMessagePromptTemplate } from "@langchain/core/prompts";

import { config } from "dotenv";
import { getRetriever } from "./retriever.js"
import { formatDocumentsAsString } from "langchain/util/document";
import {
    RunnablePassthrough,
    RunnableSequence,
    RunnableLambda
} from "@langchain/core/runnables";

config();

// const testPrompts1 = [
//     "can you tell me how to build a checkbox in SvARIA?",
//     "Can you make it with only the following options Thai Food or Mexican Food?",
//     "Can you add a new option of Elea and have the accent color be green?",
//     "Can we start from scratch now. Can you build a button that says Hello in SvARIA?",
//     "Can you make a form with two options username and password?"
//   ]

// const testPrompts2 = [
//   "Can you tell me how to build a button?",
//   "Can you give the button a label of 'Click me'",
//   "Can you change the label of the button to 'Click here'",
//   "Can you tell me how to build a progress bar",
//   "What colour is the sky?",
//   "Can you tell me how to build a spin bar component?",
// ] 


async function loadModel() {
    const retriever = await getRetriever()
    const llm = new ChatOpenAI({ model: "gpt-4o-mini", temperature: 0 });
    const systemTemplate =
        `You are helping a user write javascript code based on their questions. These are the components that you can help with called the available component list: [Button, Tab, Checkbox, Form, Menu, Modal, NavBar, Navigation Bar, Progress Bar, Tree, Radio, Radio Group, Spin Button, Alert, Toast, Popover, Switch, Accordion Group]. If the user asks about building or creating a component that is not part of the available component list you can respond by saying that SvARIA does not support this type of component yet. If the user asks a question that is not related to the available components you can respond by saying that you cannot help with that question. Use the context as sample code to help formulate your response. If the user asks you about a component that is in the chat history you can use the chat history to help you answer the question. If the user asks about building a different component from the component list than was referenced in the chat history you can ignore the chat history. Context: {context}`


    const humanTemplate = "{question}";

    const prompt = ChatPromptTemplate.fromMessages([
        SystemMessagePromptTemplate.fromTemplate(systemTemplate),
        ["placeholder", "{chat_history}"],
        ["human", humanTemplate],
    ]);


    const filterMessages = ({ chat_history }) => {
        chat_history = chat_history.filter((message) => {
            return !message.content.includes("cannot help") && !message.content.includes("does not support")

        })
        return chat_history.slice(-1)
    };

    const ragChain = RunnableSequence.from([
        RunnablePassthrough.assign({
            context: RunnableLambda.from((input) => input.question).pipe(retriever).pipe(formatDocumentsAsString),
            chat_history: filterMessages,
        }),
        prompt,
        llm,
    ]);

    return ragChain
}

export default loadModel


