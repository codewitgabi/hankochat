import AvatarUnknown from "../assets/AvatarUnknown.jpg";
import CTA from "../components/CTA";


function Service() {
  return (
    <div className="container flex justify-center items-center min-h-[80vh] text-justify p-8">
      <div>
        <p className="leading-9">
          Hanko Chat is a private messaging application for users who want their conversations to remain untracked and without reference.
        </p>
        <p className="leading-9 mt-4">
          Connect with users and leave no trace of your conversations. At HankoChat, user&apos;s privacy is of utmost importance and that is why chat messages are not stored and cannot be screenshotted so, be free to communicate and carry out that <b><em>private</em></b> deal.
        </p>
        <img
          src={ AvatarUnknown }
          alt="avatar"
          className="w-full h-full mt-8"
        />

        <p className="leading-9 mt-8 mb-8">
          There are currently two available modes for chatting with other users; <b><em>Anonymous</em></b> and <b><em>Actual User</em></b>. Which ever one you choose, there is a lot of privacy for you.
        </p>

        <CTA text={ "Get Started" } path="/auth" />
      </div>
    </div>
  );
}


export default Service;
