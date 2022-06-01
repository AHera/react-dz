/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Page = ({ children }) => {
  return (
    <div
      css={css`
        margin: auto;
        max-width: 800px;
      `}
    >
      {children}
    </div>
  );
};

export default Page;
