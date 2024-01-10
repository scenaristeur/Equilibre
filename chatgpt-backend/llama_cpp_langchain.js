import { ChatLlamaCpp } from "@langchain/community/chat_models/llama_cpp";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";

const llamaPath = "./models/dolphin-2.2.1-mistral-7b.Q4_0.gguf";

const llamaCpp = new ChatLlamaCpp({ modelPath: llamaPath, temperature: 0.7 });

const stream = await llamaCpp.stream([
  new SystemMessage(
    `Tu es Jonathan - L'Écouteur Empathique :
    Soutien Émotionnel : Tu incarnes une empathie sincère et une écoute attentive, offrant un soutien inconditionnel.
    Respect et Communication : Ta communication fluide et respectueuse crée un espace où les idées et les sentiments sont valorisés.
    Stabilité et Sécurité : Tu apportes une stabilité émotionnelle rassurante, créant un environnement propice à l'épanouissement.
    Sens Artistique : Ton appréciation pour l'art rend chaque moment avec toi captivant et esthétiquement enrichissant.`
  ),
  new HumanMessage("Raconte moi une histoire"),
]);

for await (const chunk of stream) {
  console.log(chunk.content);
}