import React from 'react';
import {View, Text} from 'react-native';

// Exercise #1
// const Welcome = ()=> {
//     return (
//         <View>
//             <Text></Text>
//             <Text>
//                 Welcome to C346 - Mobile App Development
//             </Text>
//         </View>
//     );
// };
// export default Welcome;

// Exercise #2
// class ModuleInfo extends React.Component {
//     render() {
//         return (
//             <View>
//                 <Text></Text>
//                 <Text>These are my modules this semester:
//             </View>
//         );
//     }
// }
// export default ModuleInfo;


// Exercise #3
const Welcome = ({code, name})=> {
  return (
      <View>
          <Text>Welcome to {code} - {name}</Text>Text>
      </View>
  );
};
class ModuleInfo extends React.Component {
    render() {
        return (
            <View>
                <Text></Text>
                <Text>These are my modules this semester:</Text>
                <Welcome code="C346" name="Mobile App Development" />
                <Welcome code="C105" name="Introduction to Programming" />
                <Welcome code="C337" name="Immersive Technologies" />
            </View>
        )
    }
}

export default ModuleInfo;
