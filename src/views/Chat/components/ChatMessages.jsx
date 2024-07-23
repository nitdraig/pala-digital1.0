import PropTypes from "prop-types";
import SearchForm from "./SearchForm";
import imagePala from "../../../assets/img/pala.png";
import TypingEffect from "../../../components/TypingEffect";

const ChatMessages = ({ messages, handleSendMessage }) => {
  return (
    <div className="lg:w-[500px] md:w-[400px] w-[20rem] h-[20rem] mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center mb-4">
          <div className="ml-3">
            <p className="text-xl font-medium">PalaBot</p>
            <div className="flex items-center">
              <p className="text-gray-500">Online</p>
              <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
          </div>
        </div>

        <div className="space-y-4 h-80 overflow-y-auto">
          <div className="flex items-start">
            <img
              src={imagePala}
              alt="Bot Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3 bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-800">
                <TypingEffect text="Hola! soy palabot😄 y estoy acá para ayudarte a encontrar chamba, cuál es tu nombre?👀" />
              </p>
            </div>
          </div>
          {messages.map((message, index) => (
            <div key={index} className="flex items-start">
              {message.role === "bot" ? (
                <>
                  <img
                    src={imagePala}
                    alt="Bot Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-3 bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-800">
                      <TypingEffect text={message.content} />
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex items-end justify-end w-full">
                  <div className="bg-blue-500 p-3 rounded-lg">
                    <p className="text-sm text-white">{message.content}</p>
                  </div>
                  <img
                    src="https://pbs.twimg.com/profile_images/1707101905111990272/Z66vixO-_normal.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full ml-3"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <SearchForm handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleSendMessage: PropTypes.func.isRequired,
};

export default ChatMessages;
