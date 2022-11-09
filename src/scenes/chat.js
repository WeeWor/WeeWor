import React from "react";
import {connect} from "react-redux";
import AppTemplate from "../components/templates/app";
import ChatBox from "../components/molecules/chat-box";

const mapStateToProps = state => ({
  chats: state.chat.chats
});

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      units: []
    }
  }

  componentDidMount() {
    this.setState({units: this.props.chats})
  }

  render() {
    const { navigation } = this.props;
    return (
        <AppTemplate {...this.props}>
          {this.state.units.map((item, index) => (
            <ChatBox img={item.image} unit={item.name} detail="" unread={false} onPress={() => navigation.push('ChatMessage', { id: item.id })} key={item.id}/>
          ))}
        </AppTemplate>
    );
  }
}

export default connect(mapStateToProps)(Chat);
