import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import React from 'react';

const Rating = ({ rating }) => (
  <>
    {[...Array(5)].map((x, index) => (
      <span>
        {rating > index ? <AiFillStar fontSize="15px" /> : <AiOutlineStar fontSize="15px" />}
      </span>
    ))}
  </>
)

export default Rating;
