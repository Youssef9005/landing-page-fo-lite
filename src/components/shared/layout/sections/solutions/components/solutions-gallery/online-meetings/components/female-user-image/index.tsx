import React from "react";
import MeetingsImage from "../online-meetings-images/index";
import MessageBubble from "../message-bubble/index";

const girlMessages = [
  { text: "Fine, we’re gonna start the Job.", position: "top-20 right-0", delay: 1 },
  { text: "I’m ready", position: "top-12 left-1", delay: 3 },
  { text: "Ok, Tnx", position: "top-32 left-16", delay: 5 },
];

function FemaleUserImage() {
  return (
    <MeetingsImage imageSrc="/assets/images/Solution/girl-image.png">
      {girlMessages.map(function (msg, index) {
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

export default FemaleUserImage;
