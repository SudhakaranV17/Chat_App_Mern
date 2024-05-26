import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser.id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilepic = fromMe
    ? authUser.profilepic
    : selectedConversation?.profilepic;
  const chatColor = fromMe ? "bg-indigo-600" : "";
  const createTime = () => {
    const date = new Date(message.createdAt);
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    return time;
  };
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilepic} alt="" />
        </div>
      </div>
      <div className={`chat-bubble  ${chatColor} text-white`}>
        {message.message}
        {/* <div className="flex justify-end block text-sm">{createTime()}</div> */}
      </div>
      <div className="chat-footer opacity-50 text-xs gap-2 flex items-center text-white">
        {createTime()}
      </div>
    </div>
  );
}

export default Message;
