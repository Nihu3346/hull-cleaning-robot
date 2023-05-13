import { useEffect, useRef, useState } from "react";
import "./Slideshowtext.css";
import { Box } from "@mui/material";

const colors = ["yash", "#00C49F", "#FFBB28"];
const delay = 3500;

function Slideshowtext() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <Box sx={{mt: 10}}>
        <p class="item-1">
          This is your last chance. After this, there is no turning back.
        </p>

        <p class="item-2">
          You take the blue pill - the story ends, you wake up in your bed and
          believe whatever you want to believe.
        </p>

        <p class="item-3">
          You take the red pill - you stay in Wonderland and I show you how deep
          the rabbit-hole goes.
        </p>
      </Box>
    </>
  );
}

export default Slideshowtext;
