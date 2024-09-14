import React from "react";
import MeetingsImage from "../online-meetings-images";
import MessageBubble from "../message-bubble";

const manMessages = [
  { text: "Hello, How are you today?", position: "top-20 right-0", delay: 0 },
  { text: "Ok, let’s get started with the project", position: "top-12 left-1", delay: 2 },
  { text: "I’ll send you the file.", position: "top-32 left-16", delay: 4 },
];

function MaleUserImage() {
  return (
    <MeetingsImage imageSrc="/assets/images/Solution/man-image.png">
      {manMessages.map(function (msg, index) {
        return (
          <MessageBubble
            key={index}
            text={msg.text}
            position={msg.position}
            delay={msg.delay}
          />
        );
      })}
    </MeetingsImage>
  );
}

export default MaleUserImage;
