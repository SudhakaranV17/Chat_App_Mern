import useGetConversation from "../../hooks/useGetConversation";
import Convo from "./Convo";

function Conversations() {
  const { loading, conversations } = useGetConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Convo
          key={conversation._id}
          conversation={conversation}
          lastindex={idx === conversations.length - 1}
        />
      ))}
      {loading ? (
        <span className="spinner loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}

export default Conversations;
