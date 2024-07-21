import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { config } from "dotenv";

config();


export const getRetriever =  (async () => {

    const loader = new DirectoryLoader(
        "src/componentDemoCode",
       {
        ".svelte": (path) => new TextLoader(path)
       }
    )
    
    const docs = await loader.load();
    
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 3000,
      chunkOverlap: 0,
    });
    const splits = await textSplitter.splitDocuments(docs);
    const vectorStore = await MemoryVectorStore.fromDocuments(
      splits,
      new OpenAIEmbeddings()
    );
    
    // Retrieve and generate using the relevant snippets of the blog.
    return vectorStore.asRetriever();
})