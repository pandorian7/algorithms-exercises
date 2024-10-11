import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  let tmp;
  for (let i=nums.length; i>=0; i--) {
    for (let j=0; j<i-1; j++) {
      if (nums[j]>nums[j+1]) {
        tmp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = tmp;
        snapshot(nums);
      }
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
