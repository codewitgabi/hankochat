import { MicrophoneIcon } from "@heroicons/react/24/outline";


function MessageBox() {
  return (
    <div className="absolute bottom-2 left-0 right-0">
      <form method="post" className="flex mx-6 items-center gap-1">
        <div className="relative grow">
          <input
            type="text"
            name="textMessage"
            placeholder="Message"
            required
            className="w-full p-2 rounded border-none outline-none text-black focus:ring focus:ring-teal-200 transition duration-300 pr-10"
          />
          <MicrophoneIcon className="absolute h-6 w-6 top-2 right-2 text-teal-900" />
        </div>
        <MicrophoneIcon className="h-6 w-6" />
      </form>
    </div>
  );
}


export default MessageBox;
