import React from "react";
import Sticky from "react-stickynode";
import { useDispatch } from "react-redux";

import Expanded from "./Expanded";
import Folded from "./Folded";
import { setHeaderExpanded } from "../../appSlice";

export default function () {
  const dispatch = useDispatch();

  return (
    <Sticky innerZ="1201" onStateChange={(status)=> dispatch(setHeaderExpanded(status.status !== Sticky.STATUS_FIXED))}>
      {(status) => {
        if (status.status === Sticky.STATUS_FIXED) {
          return <Folded />;
        }
        return <Expanded />;
      }}
    </Sticky>
  );
}
