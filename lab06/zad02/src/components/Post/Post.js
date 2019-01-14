import React from "react";

import Title from "../Title/Title";
import Image from "../Image/Image";
import Text from "../Text/Text";
import Rating from "../Rating/Rating";
import withLanguage from "../withLanguage/withLanguage";

class Post extends React.Component {
  state = {
    rating: this.props.rating
  };

  onStarCLick = i => {
    this.setState({
      rating: i
    });
  };

  render() {
    const { title, image, text, language } = this.props;
    const { rating } = this.state;
    return (
      <div>
        <Title title={title[language]} />
        <Image url={image} />
        <Rating rating={rating} onChange={this.onStarCLick} />
        <Text text={text[language]} />
      </div>
    );
  }
}

export default withLanguage(Post);
