import { MicrophoneIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { socket } from "../socket";


function MessageBox({ receiverID, setMessages }) {
  console.log(receiverID)
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = e.target.textMessage.value;
    socket?.emit("send_message", socket?.id, receiverID, message);

    e.target.reset();
  };

  return (
    <div className="absolute left-0 right-0 bottom-0 bg-blue-950/10 py-4">
      <form method="post" className="flex mx-6 items-center gap-3" onSubmit={ handleSubmit }>
        <div className="relative grow">
          <input
            type="text"
            name="textMessage"
            placeholder="Message"
            required
            className="w-full p-3 rounded border-none outline-none text-black focus:ring focus:ring-teal-200 transition duration-300 pr-10"
          />
          <MicrophoneIcon className="absolute h-6 w-6 top-2 right-2 text-teal-900" />
        </div>
        <button><PaperAirplaneIcon className="h-6 w-6" /></button>
      </form>
    </div>
  );
}


export default MessageBox;
