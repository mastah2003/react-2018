import React from "react";

import Title from "../Title/Title";
import Image from "../Image/Image";
import Text from "../Text/Text";
import Rating from "../Rating/Rating";

import { LanguageConsumer } from "../LanguageContext/LanguageContext";

const onStarCLick = i => alert(`click ${i} star`);

const Post = ({ title, image, text, rating }) => {
  return (
    <LanguageConsumer>
      {value => (
        <div>
          <Title title={title[value]} />
          <Image url={image} />
          <Rating rating={rating} onChange={onStarCLick} />
          <Text text={text[value]} />
        </div>
      )}
    </LanguageConsumer>
  );
};

export default Post;
