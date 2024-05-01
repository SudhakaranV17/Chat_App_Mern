import React from "react";

function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={`chat-bubble  bg-blue-500 `}>
        You underestimate my power!
      </div>
      <div className="chat-footer opacity-50 text-xs gap-2 flex items-center">
        Seen at 12:46
      </div>
    </div>
  );
}

export default Message;
