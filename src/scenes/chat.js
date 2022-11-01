import React from "react";
import AppTemplate from "../components/templates/app";
import ChatBox from "../components/molecules/chat-box";

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
        <AppTemplate {...this.props}>
          <ChatBox img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTplZHUVIoXC-YGbEg3ylOwDJU6k8de8C7vms1X67w7g&s" unit="ชื่อหน่วยงาน" detail="ล่าสุดใน 3 ชั่วโมงที่แล้ว" unread={true} onPress={() => navigation.push('ChatMessage')}/>
        </AppTemplate>
    );
  }
}

export default Chat;
