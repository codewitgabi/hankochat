function ChatBox({ message }) {
  return (
    <div className="p-2 bg-blue-950/10 rounded text-cadetBlue text-sm">
      <pre>{ message }</pre>
    </div>
  );
}


export default ChatBox;
