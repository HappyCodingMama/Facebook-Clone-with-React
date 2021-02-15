import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import {
  LocalHospital,
  EmojiFlags,
  People,
  Chat,
  Storefront,
  VideoLibrary,
  ExpandMoreOutlined,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://avatars.githubusercontent.com/u/67956944?s=60&v=4"
        title="Sean Shine"
      />
      <SidebarRow Icon={LocalHospital} title="Covid-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
    </div>
  );
}

export default Sidebar;
