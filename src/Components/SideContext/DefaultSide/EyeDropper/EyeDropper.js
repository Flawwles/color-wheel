import React, { useCallback, useEffect, useRef, useState } from "react";
import useEyeDropper from "use-eye-dropper";
import "./EyeDropper.css";
import { Button, IconButton } from "@brandwatch/axiom-components";
import { useDispatch, useSelector } from "react-redux";
import { hexToHue } from "../../../Utils";
import { Portal } from "@reach/portal";

const EyeDropper = () => {
  const [showMessage, setShowMessage] = useState(false);
  const { open } = useEyeDropper();
  const [error, setError] = useState();
  const [message, setMessage] = useState("No matching colors found");
  const colorChip = useRef(null);

  const searchForColor = useSelector((state) => state.searchForColor);
  const masterColorList = useSelector((state) => state.masterColorList);

  const dispatch = useDispatch();

  const setSearchForColor = (data) => {
    dispatch({
      type: "setSearchForColor",
      payload: data,
    });
  };

  function findMatchesInRange(arr, target, range) {
    return arr.reduce(function (matches, curr) {
      const currDiff = Math.abs(curr.data.values.h - target);
      if (currDiff <= range) {
        matches.push(curr);
      }
      return matches;
    }, []);
  }

  const findMatch = (searchFor) => {
    const searchHue = hexToHue(searchFor);
    // const findMatchingColor = masterColorList.filter(
    //   (color) => color.data.values.h === searchHue
    // );

    const matchingColor = findMatchesInRange(masterColorList, searchHue, 2);
    console.log(matchingColor);
    matchingColor.forEach((matchingColor) => {
      matchingColor.div.current.className =
        "color-wheel--dot--wrapper matched-color";
    });
    colorChip.current?.lastElementChild?.scrollIntoView();

    setMessage(`Found ${matchingColor.length} matches`);
    setShowMessage(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 3000);
    return () => clearTimeout(timer);
  }, [showMessage]);

  const pickColor = () => {
    open()
      .then((color) => {
        setSearchForColor(color.sRGBHex);
        findMatch(color.sRGBHex);
      })
      .catch((e) => {
        if (!e.canceled) setError(e);
      });
  };

  const clearEyedropper = (clear) => {
    console.log("CLEAR");
    console.log(clear);
    setSearchForColor();
    clear.forEach(
      (item) => (item.div.current.className = "color-wheel--dot--wrapper")
    );
  };

  const escFunction = useCallback(
    (event) => {
      if (event.key === "Escape") {
        console.log("CLOSE");
        clearEyedropper(masterColorList);
      }
    },
    [masterColorList]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction, masterColorList]);
  return (
    <div ref={colorChip}>
      <p>
        Have a color on your design file and want to know the closest css var?
      </p>
      <p>Open the eye dropper, select it and find its cloest match.</p>

      <Button
        className="button--full-width"
        variant="secondary"
        onClick={() => pickColor()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          style={{ marginRight: "4px" }}
        >
          <path
            fill="var(--color-ui-accent)"
            d="M17.542 13.147l-7.455-6.667 1.334-1.49c.822.736 2.087.666 2.822-.159l3.503-3.831c.593-.663 1.414-1 2.238-1 1.666 0 3.016 1.358 3.016 2.996 0 .723-.271 1.435-.78 2.005l-3.503 3.83c-.735.824-.666 2.087.158 2.825l-1.333 1.491zm-4.314-1.175l-7.791 8.65c-.314.352-1.322.323-1.853.557.172-.554.048-1.538.362-1.89l7.791-8.651-1.491-1.333-7.9 8.794c-1.277 1.423-.171 2.261-1.149 4.052-.135.244-.197.48-.197.698 0 .661.54 1.151 1.141 1.151.241 0 .492-.079.724-.256 1.733-1.332 2.644-.184 3.954-1.647l7.9-8.792-1.491-1.333z"
          />
        </svg>
        Open eyedropper
      </Button>
      <div className="color-chip-wrapper">
        {searchForColor ? (
          <div className="eye-dropper-color-chip">
            <div className="eye-dropper-color-chip--text">
              <span
                onClick={() => pickColor()}
                className="eye-dropper-color-swatch"
                style={{
                  background: searchForColor,
                }}
              ></span>
              {searchForColor}
            </div>
            <div>
              <IconButton
                onClick={() => clearEyedropper(masterColorList)}
                aria-label="close"
                name="cross"
                size="small"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {!!error && <span>{error.message}</span>}
      </div>

      {showMessage ? (
        <Portal>
          <div className="notification--wrapper">
            <div className="notification">{message}</div>
          </div>
        </Portal>
      ) : null}
    </div>
  );
};

export default EyeDropper;
