import React from "react";
import { Wish } from "../../models/wish";
import placeholder from "../../assets/img/placeholder-photo.svg";
import FileSelector from "../common/fileSelector/fileSelector";
import { observer } from "mobx-react";

export interface IWishCardProps {
  isLoading: boolean;
  wish?: Wish;
  onPhotoSelected?: (file: File) => void;
}

const WishCard: React.FC<IWishCardProps> = ({
  isLoading,
  wish,
  onPhotoSelected,
}) => {
  return (
    <div className="wish-card">
      <span>Your unique code: {wish?.id}</span>
      <img src={wish?.photoUrl ?? placeholder} alt="your lovely face!" />
      <FileSelector
        accept="image/*"
        onFileSelected={(file) => onPhotoSelected?.(file)}
      />
    </div>
  );
};

export default observer(WishCard);
