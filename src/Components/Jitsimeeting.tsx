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

// import React, { useEffect, useState } from "react";
// import { JitsiMeeting } from "@jitsi/react-sdk";
// import dayjs from "dayjs";

// const JitsiComponent = ({ roomTime }: { roomTime: string }) => {
//   const appId = "vpaas-magic-cookie-40823772f4724e1e9143d917b98679dc"; // ✅ Use your JaaS App ID
//   const [meetingStatus, setMeetingStatus] = useState<
//     "waiting" | "live" | "expired"
//   >("waiting");

//   useEffect(() => {
//     const checkMeetingTime = () => {
//       const meetingStartTime = dayjs(roomTime);
//       const currentTime = dayjs();

//       if (currentTime.isBefore(meetingStartTime)) {
//         setMeetingStatus("waiting");
//       } else if (currentTime.isAfter(meetingStartTime.add(1, "hour"))) {
//         setMeetingStatus("expired");
//       } else {
//         setMeetingStatus("live");
//       }
//     };

//     checkMeetingTime();
//     const interval = setInterval(checkMeetingTime, 60000); // Check every minute

//     return () => clearInterval(interval);
//   }, [roomTime]);

//   if (meetingStatus === "waiting") {
//     return (
//       <div style={{ textAlign: "center", padding: "20px", fontSize: "20px" }}>
//         <p>Meeting will start at {roomTime}. Please wait...</p>
//       </div>
//     );
//   }

//   if (meetingStatus === "expired") {
//     return (
//       <div
//         style={{
//           textAlign: "center",
//           padding: "20px",
//           fontSize: "20px",
//           color: "red",
//         }}
//       >
//         <p>Meeting has ended.</p>
//       </div>
//     );
//   }
//   const  roomName=`${appId}/${roomTime}`
//   console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWW",roomName)

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
//         roomName={`${appId}/${roomTime}`}
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
/*
import React, { useEffect, useState } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import dayjs from "dayjs";

const JitsiComponent = ({ roomTime }: { roomTime: string }) => {
  // Ensure all values are string (fallback to empty string if null)
  const first_name = localStorage.getItem("first_name") ?? "";
  const last_name = localStorage.getItem("last_name") ?? "";
  const mail = localStorage.getItem("email") ?? "";
  
  // Get and sanitize meeting link to extract only the room name
  const rawMeetingLink = localStorage.getItem("meeting_link") ?? "";
  const meeting_link = rawMeetingLink.replace("https://meet.jit.si/", "");

  const appId = "vpaas-magic-cookie-40823772f4724e1e9143d917b98679dc";
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
    const interval = setInterval(checkMeetingTime, 60000);
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

  // Sanitize roomTime to create a safe roomName (not used here, but kept if needed)
  const safeRoomTime = roomTime.replace(/[^\w]/g, "");
  const roomName = `${appId}_${safeRoomTime}`;

  console.log("Joining room:", meeting_link);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <JitsiMeeting
      
        domain="8x8.vc"
        roomName={meeting_link}
        configOverwrite={{
          prejoinPageEnabled: false,
          disableModeratorIndicator: false,
          startWithAudioMuted: true,
          startWithVideoMuted: true,
        }}
        interfaceConfigOverwrite={{
          SHOW_JITSI_WATERMARK: false,
        }}
        userInfo={{
          displayName: `${first_name} ${last_name}`,
          email: mail,
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
*/
import React, { useEffect, useState } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import dayjs from "dayjs";

const JitsiComponent = ({ roomTime }: { roomTime: string }) => {
  const first_name = localStorage.getItem("first_name") ?? "";
  const last_name = localStorage.getItem("last_name") ?? "";
  const mail = localStorage.getItem("email") ?? "";

  // const rawLink = localStorage.getItem("meeting_link") ?? "";
  // const meeting_link = rawLink.replace("https://meet.jit.si/", ""); // ✅ Strip domain
  const roomName=localStorage.getItem("meeting_link")??""

  const [meetingStatus, setMeetingStatus] = useState<"waiting" | "live" | "expired">("waiting");

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
    const interval = setInterval(checkMeetingTime, 60000);
    return () => clearInterval(interval);
  }, [roomTime]);

  if (meetingStatus === "waiting") {
    return <div style={{ textAlign: "center", padding: 20 }}>Meeting will start at {roomTime}. Please wait...</div>;
  }

  if (meetingStatus === "expired") {
    return <div style={{ textAlign: "center", padding: 20, color: "red" }}>Meeting has ended.</div>;
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <JitsiMeeting
        // domain="meet.jit.si"
        // roomName={meeting_link}
        // configOverwrite={{
        //   prejoinPageEnabled: false,
        //   startWithAudioMuted: true,
        //   startWithVideoMuted: true,
        // }}

         domain="8x8.vc"
        roomName={roomName}
        configOverwrite={{
          prejoinPageEnabled: false,
          startWithAudioMuted: true,
          startWithVideoMuted: true,
        }}
        interfaceConfigOverwrite={{
          SHOW_JITSI_WATERMARK: false,
        }}
        userInfo={{
          displayName: `${first_name} ${last_name}`,
          email: mail,
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


