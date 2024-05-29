import { View } from "@react-three/drei";

const ModelView = ({
  index,
  groupref,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    ></View>
  );
};

export default ModelView;
