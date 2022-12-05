import React, { useEffect, useRef, useState } from "react";
import { Wish } from "../../models/wish";
import placeholderPhoto from "../../assets/img/placeholder-photo.svg";
import placeholderVideo from "../../assets/img/placeholder-video.svg";
import FileSelector from "../common/fileSelector/fileSelector";
import { observer } from "mobx-react";
import TextInput from "../common/textInput/textInput";
import { debounce } from "lodash";
import TagSelector from "../common/tagSelector/tagSelector";
import { runInAction } from "mobx";
import "./wishCard.sass";
import { ColorUtil } from "../common/colorSwatch/color";
import ColorPicker from "../common/colorSwatch/colorPicker";
import TabbedLayout from "../tabbedLayout/tabbedLayout";

export interface IWishCardProps {
  isLoading: boolean;
  isUploadingPhoto: boolean;
  isUploadingVideo: boolean;
  wish: Wish;
  onPhotoSelected?: (file: File) => void;
  onVideoSelected?: (file: File) => void;
  onWishUpdated?: (wish: Wish) => void;
}

const WishCard: React.FC<IWishCardProps> = ({
  isLoading,
  isUploadingPhoto,
  isUploadingVideo,
  wish,
  onPhotoSelected,
  onVideoSelected,
  onWishUpdated,
}) => {
  const handleWishUpdated = useRef(
    debounce((wish: Wish) => onWishUpdated?.(wish), 300)
  ).current;

  useEffect(() => {
    return () => {
      handleWishUpdated.cancel();
    };
  }, [handleWishUpdated]);

  const [selectedTab, setSelectedTab] = useState(0);
  const photoIndex = 0;
  const videoIndex = 1;

  return (
    <div className={`wish-card ${ColorUtil.getClassName(wish.color)}`}>
      <span>Your unique code: {wish.id}</span>

      <TabbedLayout
        tabs={[
          {
            label: "Photo",
            content: (
              <>
                {wish.photoUrl ? (
                  <img
                    src={wish.photoUrl}
                    alt="Your lovely photo"
                    aria-hidden
                  />
                ) : (
                  <img
                    src={placeholderPhoto}
                    alt="Upload a nice photo using the button below"
                    aria-hidden
                  />
                )}
                <FileSelector
                  accept="image/*"
                  selectedFileName={wish.photoUrl}
                  onFileSelected={(file) => {
                    setSelectedTab(photoIndex);
                    onPhotoSelected?.(file);
                  }}
                  text="Choose a photo"
                />
              </>
            ),
          },
          {
            label: "Video",
            content: (
              <>
                {wish.videoUrl ? (
                  <video controls>
                    <source src={wish.videoUrl} />
                  </video>
                ) : (
                  <img
                    src={placeholderVideo}
                    alt="Upload a nice video using the button below"
                  />
                )}
                <FileSelector
                  accept="video/mp4,video/x-m4v,video/*"
                  selectedFileName={wish.videoUrl}
                  onFileSelected={(file) => {
                    setSelectedTab(videoIndex);
                    onVideoSelected?.(file);
                  }}
                  text="Choose a video"
                />
              </>
            ),
          },
        ]}
        selectedTabIndex={selectedTab}
        isLoading={isUploadingPhoto || isUploadingVideo}
        setSelectedTabIndex={(index) => setSelectedTab(index)}
      />
      <TextInput
        placeholder="Enter a name..."
        value={wish.name}
        onValueChanged={(text) => {
          runInAction(() => {
            wish.name = text;
          });
          handleWishUpdated(wish);
        }}
      />
      <TagSelector
        selectedTags={wish.tags}
        onTagToggled={(tag: string) => {
          runInAction(() => {
            const index = wish.tags.indexOf(tag);
            if (index > -1) {
              wish.tags.splice(index, 1);
            } else {
              wish.tags.push(tag);
            }
          });
          handleWishUpdated(wish);
        }}
      />
      <ColorPicker
        selectedColor={wish.color}
        onColorSelected={(color) => {
          runInAction(() => {
            wish.color = color;
          });
          handleWishUpdated(wish);
        }}
      />
    </div>
  );
};

export default observer(WishCard);
