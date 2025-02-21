// import React from "react";
// import { JitsiMeeting } from "@jitsi/react-sdk";

// const JitsiComponent = ({ roomName }: any) => {
//   const appId = "vpaas-magic-cookie-40823772f4724e1e9143d917b98679dc"; // ✅ Use your JaaS App ID

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <JitsiMeeting
//         domain="8x8.vc"
//         roomName={`${appId}/${roomName}`}
//         configOverwrite={{
//           disableModeratorIndicator: false,
//           startWithAudioMuted: true,
//           startWithVideoMuted: true,
//         }}
//         interfaceConfigOverwrite={{
//           SHOW_JITSI_WATERMARK: false,
//         }}
//         userInfo={{
//           displayName: "Royal MindFulness",
//           email: "royalMindFulness.com",
//         }}
//         getIFrameRef={(iframe: any) => {
//           if (iframe) {
//             iframe.style.height = "100vh";
//             iframe.style.width = "100%";
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default JitsiComponent;

import React, { useEffect, useState } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import dayjs from "dayjs";

const JitsiComponent = ({ roomTime }: { roomTime: string }) => {
  const appId = "vpaas-magic-cookie-40823772f4724e1e9143d917b98679dc"; // ✅ Use your JaaS App ID
  const [meetingStatus, setMeetingStatus] = useState<
    "waiting" | "live" | "expired"
  >("waiting");

  useEffect(() => {
    const checkMeetingTime = () => {
      const meetingStartTime = dayjs(roomTime);
      const currentTime = dayjs();

      if (currentTime.isBefore(meetingStartTime)) {
        setMeetingStatus("waiting");
      } else if (currentTime.isAfter(meetingStartTime.add(1, "hour"))) {
        setMeetingStatus("expired");
      } else {
        setMeetingStatus("live");
      }
    };

    checkMeetingTime();
    const interval = setInterval(checkMeetingTime, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [roomTime]);

  if (meetingStatus === "waiting") {
    return (
      <div style={{ textAlign: "center", padding: "20px", fontSize: "20px" }}>
        <p>Meeting will start at {roomTime}. Please wait...</p>
      </div>
    );
  }

  if (meetingStatus === "expired") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "20px",
          color: "red",
        }}
      >
        <p>Meeting has ended.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <JitsiMeeting
        domain="8x8.vc"
        roomName={`${appId}/${roomTime}`}
        configOverwrite={{
          disableModeratorIndicator: false,
          startWithAudioMuted: true,
          startWithVideoMuted: true,
        }}
        interfaceConfigOverwrite={{
          SHOW_JITSI_WATERMARK: false,
        }}
        userInfo={{
          displayName: "Royal MindFulness",
          email: "royalMindFulness.com",
        }}
        getIFrameRef={(iframe: any) => {
          if (iframe) {
            iframe.style.height = "100vh";
            iframe.style.width = "100%";
          }
        }}
      />
    </div>
  );
};

export default JitsiComponent;
