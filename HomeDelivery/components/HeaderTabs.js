import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from "react-native-image-header-scroll-view";
class HeaderTabs extends React.Component {
  render() {
    return (
      <ImageHeaderScrollView
        maxHeight={200}
        minHeight={200}
        headerImage={require("../assets/images/headerDelivery.jpg")}
        renderForeground={() => (
          <View
            style={{
              height: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => console.log("tap!!")}>
              <Text style={{ backgroundColor: "transparent" }}></Text>
            </TouchableOpacity>
          </View>
        )}
      >
        <View style={{ height: 1000 }}>
          <TriggeringView onHide={() => console.log("text hidden")}>
            <Text></Text>
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
    );
  }
}
export default HeaderTabs;
