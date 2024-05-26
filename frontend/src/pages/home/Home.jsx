import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
// import MessageContainer from "../../components/MessageContainer";

function Home() {
  return (
    <div className="flex overflow-hidden w-full h-full">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home;
