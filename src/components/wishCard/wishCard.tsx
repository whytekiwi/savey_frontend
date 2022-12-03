import React, { useEffect, useRef } from "react";
import { Wish } from "../../models/wish";
import placeholder from "../../assets/img/placeholder-photo.svg";
import FileSelector from "../common/fileSelector/fileSelector";
import { observer } from "mobx-react";
import TextInput from "../common/textInput/textInput";
import { debounce } from "lodash";
import TagSelector from "../common/tagSelector/tagSelector";
import { runInAction } from "mobx";
import "./wishCard.sass";
import { ColorUtil } from "../common/colorSwatch/color";
import ColorPicker from "../common/colorSwatch/colorPicker";
import Loader from "../common/loader/loader";

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

  return (
    <div className={`wish-card ${ColorUtil.getClassName(wish.color)}`}>
      <span>Your unique code: {wish.id}</span>
      <div className="img-container">
        {isUploadingPhoto ? (
          <Loader />
        ) : (
          <img src={wish.photoUrl ?? placeholder} alt="your lovely face!" />
        )}
      </div>
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
      <div className="file-upload">
        <FileSelector
          accept="image/*"
          selectedFileName={wish.photoUrl}
          onFileSelected={(file) => onPhotoSelected?.(file)}
          text="Choose a photo"
        />
        <FileSelector
          accept="video/mp4,video/x-m4v,video/*"
          selectedFileName={wish.videoUrl}
          onFileSelected={(file) => onVideoSelected?.(file)}
          text="Choose a video"
        />
      </div>
    </div>
  );
};

export default observer(WishCard);
