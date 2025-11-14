"use client";
import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <Giscus
      repo="JJongho123/blog"
      repoId="R_kgDOQBmeEA"
      category="Announcements"
      categoryId="DIC_kwDOQBmeEM4CxvzN"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="ko"
    />
  );
}
