import { useState } from "react";

type Props = {};

function Reviews({}: Props) {
  const [reviews, setReviews] = useState(null);
  return reviews ? (
    <div>Reviews</div>
  ) : (
    <div>
      <h2>Reviews</h2>
      <h4>There isn't any reviews yet</h4>
    </div>
  );
}

export default Reviews;
