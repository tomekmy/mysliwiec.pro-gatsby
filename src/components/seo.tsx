import React from "react";

interface Props {
  prefix?: string;
  description?: string;
}

const SeoHead = (props: Props) => {
  const { prefix, description } = props;
  return (
    <>
      <title>
        {!!prefix && `${prefix} | `} Tomasz Myśliwiec - Front-end Developer
      </title>
      <meta
        name="description"
        content={
          description ||
          "Nazywam się Tomasz Myśliwiec i jestem Front-end Developerem. Zajmuję kodowaniem stron i aplikacji internetowych."
        }
      />
    </>
  );
};

export default SeoHead;
