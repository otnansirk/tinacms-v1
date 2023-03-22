import Uppy, { debugLogger } from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { useEffect, useRef } from "react";

function Uploader() {

  const uppyRef = useRef(null);

  useEffect(() => {
    if (uppyRef.current) {
      new Uppy({ logger: debugLogger }).use(Dashboard, {
        inline: true,
        target: uppyRef.current,
        showProgressDetails: true,
        proudlyDisplayPoweredByUppy: true
      });
    }
  }, [])

  return <div ref={uppyRef}></div>
}

export default Uploader;
