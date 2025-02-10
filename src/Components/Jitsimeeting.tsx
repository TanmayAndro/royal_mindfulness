import React from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

const JitsiComponent = ({ roomName }: any) => {
  const appId = "vpaas-magic-cookie-40823772f4724e1e9143d917b98679dc"; // ✅ Use your JaaS App ID

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
        roomName={`${appId}/${roomName}`}
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
