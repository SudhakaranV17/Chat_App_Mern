// import Header from "./Header";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../store/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";

function MessageContainer() {
  const { setMessages, selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);
  const noChatSelected = selectedConversation ? false : true;
  const handleClear = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/clear/${selectedConversation._id}`);
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
    console.log("Chat messages cleared");
  };

  const confirmClear = () => {
    toast(
      <div className="">
        <p className="block">Are you sure you want to clear?</p>
        <div className="mt-2 flex justify-around">
          <button
            className="bg-slate-500 hover:bg-slate-600 p-2 w-1/2 rounded"
            onClick={() => {
              handleClear();
              toast.dismiss();
            }}
          >
            {loading
              ? "<span className='spinner loading-spinner'></span>"
              : "Clear"}
          </button>
          <button className="w-1/2 p-2" onClick={() => toast.dismiss()}>
            Cancel
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeButton: false,
        closeOnClick: false,
      }
    );
  };
  return (
    <div className="w-full flex flex-col border-l border-slate-400 ">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* <Header/> */}
          <div className="bg-slate-500  px-4 py-2 mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img
                    src={selectedConversation?.profilepic}
                    alt="user avatar"
                  />
                </div>
              </div>{" "}
              <span className="text-gray-200 font-bold">
                {selectedConversation?.username}
              </span>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-transparent border-none text-gray-200 hover:bg-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-ellipsis-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40"
              >
                <li>
                  <a>View Profile</a>
                </li>
                <li>
                  <a onClick={confirmClear}>Clear Chat</a>
                </li>
                <li>
                  <a>Export Chat</a>
                </li>
                <li>
                  <a>Delete Chat</a>
                </li>
              </ul>
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2 text-white">
        <p>Hi {authUser?.username}</p>
        <p>Select a chat to start messaging.</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
