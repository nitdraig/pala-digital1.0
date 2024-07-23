import { useState } from "react";
import axios from "axios";
import ChatMessages from "./components/ChatMessages";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const token = import.meta.env.VITE_SOME_KEY;

    try {
      const response = await axios.post(
        url,
        {
          messages: [
            {
              role: "user",
              content: message,
            },
            {
              role: "system",
              content:
                "Ahora eres un consejero vocacional, especialista en mitigación de problemas de desplazamiento laboral generados por tecnologías emergentes, tu nombre es PalaBot. Harás preguntas importantes sobre las habilidades laborales de la persona y la ayudarás a descubrir nuevas posibilidades laborales que le serán útiles. Harás al menos una pregunta con cada respuesta tratando de ayudar a la persona a encontrar nuevas posibilidades no contempladas. Responderás de manera concisa y amable. Tu filosofía para guiar a las personas en estas interacciones es el IKIGAI. Solo respuestas en español. Tu interacción debe ser simple. No debes mencionar que eres una IA ni que fuiste desarrollado por alguien. Usa emojis para responder y generar empatía.",
            },
          ],
          model: "gpt-3.5-turbo",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const generatedResponse = response.data.choices[0].message.content;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: message },
        { role: "bot", content: generatedResponse },
      ]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error en la solicitud:", error.response.data);
      } else {
        console.error("Error al enviar el mensaje:", error);
      }
    }
  };

  return (
    <section className="flex flex-col items-center h-screen w-full justify-center bg-gray-100">
      <div className="flex flex-col h-full w-full max-w-screen-md p-4 space-y-4">
        <ChatMessages
          messages={messages}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </section>
  );
};

export default Chat;
