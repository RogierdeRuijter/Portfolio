import { useLayoutEffect } from "react";
import { appendMetaTag, metaTagExists } from "../../helpers/meta-tags";
import DetailCanIUse from "../3-one-detail-can-i-use.js";

export default function Page() {
  useLayoutEffect(() => {
    if (!metaTagExists("og:title")) {
      appendMetaTag("og:title", "1 very important detail about caniuse.com");
      appendMetaTag(
        "og:description",
        "44% of the usage statistic is not reliable on caniuse.com.",
      );
      appendMetaTag(
        "og:image",
        "https://rogierderuijter.com/blog/caniuse-android.png",
      );
      appendMetaTag("og:image:width", "772");
      appendMetaTag("og:image:height", "626");
    }
  }, []);

  return <DetailCanIUse />;
}
