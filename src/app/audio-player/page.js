import AudioPlayer from "@/components/audioplayer/AudioPlayer";
import CustomSelect from "@/components/audioplayer/CustomSelect";
import Select from "@/components/audioplayer/select";
import React from "react";

const page = () => {
  return (
    <div>
      <AudioPlayer />
      <CustomSelect />
    </div>
  );
};

export default page;
