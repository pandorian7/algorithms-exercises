import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  let tmp, swapped;
  for (let i=nums.length; i>=0; i--) {
    swapped = false;
    for (let j=0; j<i-1; j++) {
      if (nums[j]>nums[j+1]) {
        swapped = true;
        tmp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = tmp;
      }
      snapshot(nums);
    }
    if (!swapped) {
      break;
    }
  }
  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
