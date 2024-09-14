import React from "react";
import NumberContainer from "./components/number-container";
import GitHubContainer from "./components/git-hub";

function OpenSource() {
  return (
    <section id="features" className="flex-center flex-col gap-y-5 w-full mt-10 px-5 py-24 bg-gray-900">

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center">
        Proudly open-source
      </h1>

      <p className="text-gray-200 w-full md:w-3/4 lg:w-1/2 text-center font-medium">
        Our source code is available on GitHub - feel free to read, review, or
        contribute to it however you want!
      </p>

      <div className="flex-center flex-col sm:flex-row gap-8">
        <GitHubContainer />
        <NumberContainer />
      </div>

    </section>
  );
}

export default OpenSource;
