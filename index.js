(function () {

  function getGameSize() {

    if (window.innerWidth <= 500) {

      const width =
        window.innerWidth * 0.9;

      const height =
        width * 16 / 9;

      return {
        width: width,
        height: height
      };
    }

    return {
      width: 400,
      height: 711
    };
  }


  function updateGameSize() {

    const wrapper =
      document.getElementById(
        "GameWrapper"
      );

    const gameDiv =
      document.getElementById(
        "GameDiv"
      );

    const container =
      document.getElementById(
        "Cocos3dGameContainer"
      );

    const canvas =
      document.getElementById(
        "GameCanvas"
      );

    if (
      !wrapper ||
      !gameDiv ||
      !container ||
      !canvas
    ) {
      return;
    }

    const size =
      getGameSize();

    const widthPx =
      size.width + "px";

    const heightPx =
      size.height + "px";


    wrapper.style.width =
      widthPx;

    wrapper.style.height =
      heightPx;


    gameDiv.style.setProperty(
      "width",
      widthPx,
      "important"
    );

    gameDiv.style.setProperty(
      "height",
      heightPx,
      "important"
    );


    container.style.setProperty(
      "width",
      widthPx,
      "important"
    );

    container.style.setProperty(
      "height",
      heightPx,
      "important"
    );


    canvas.style.setProperty(
      "width",
      widthPx,
      "important"
    );

    canvas.style.setProperty(
      "height",
      heightPx,
      "important"
    );
  }


  window.updateGameSize =
    updateGameSize;


  document.addEventListener(
    "DOMContentLoaded",
    function () {

      updateGameSize();

      setTimeout(
        updateGameSize,
        100
      );

      setTimeout(
        updateGameSize,
        500
      );

      setTimeout(
        updateGameSize,
        1000
      );

      setTimeout(
        updateGameSize,
        2000
      );

    }
  );


  window.addEventListener(
    "resize",
    function () {

      updateGameSize();

    }
  );

})();
