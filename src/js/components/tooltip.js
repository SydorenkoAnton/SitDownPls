// ТУЛТИПЫ

window.addEventListener('DOMContentLoaded', ()=> {
  const title = document.querySelector("h1")

  if (title.classList != "hero__title") {
    return;
  }

  if (title.classList == "hero__title") {
    function setUpToolTip() {
      let tooltip = 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',     // описание, в сплывающем блоке
          toolTipDiv = document.createElement('div'),                // создаем всплывающий блок
          toolTipRelative = document.createElement('div'),
          toolTipElement = document.querySelector(".tooltip__btn"),
          timer;

      toolTipRelative.classList.add("tooltip__relative");             // групируем
      toolTipDiv.classList.add("div__tooltip");
      toolTipDiv.append(toolTipRelative);

      let displayTooltip = function(e, obj) {
          toolTipDiv.innerText = tooltip;
          fadeIn(toolTipDiv);
          let height = toolTipDiv.offsetHeight;                       // позиционируем всплывающий блок
          let width = toolTipDiv.offsetWidth/2;
          toolTipDiv.style.top = - height - 35 + "px";
          toolTipDiv.style.left = - width - 13 + "px";
      };

      let fadeOut = function (element) {                              // функция плавного закрытия тултипа
        let op = 1;
        if (!timer) {
          timer = setInterval(function () {
            if (op<= 0.1) {                                           // когда опасити = 0 => закрываем блок
                clearInterval(timer);
                timer = null;
                element.style.opacity = 0;
                element.style.display = "none"
            }
            element.style.opacity = op;
            op -= op * 0.1;                                           // через 10 милисикунд уменьшаем опасити на 0.1
          }, 10);
        }
      };

      let fadeIn = function (element) {                               // функция плавного открытия тултипа
        let op = 0.1;
        element.style.display = 'flex';
        let timer = setInterval(function () {
            if (op>= 1) {
                clearInterval(timer);                                 // когда опасити = 1 => чистим таймер
            }
            element.style.opacity = op;
            op += op * 0.1;                                           // через 10 милисикунд увеличиваем опасити на 0.1
        }, 10)
      };

      let timeout;
      toolTipElement.addEventListener("mouseenter", function(e){      // появление тултипа при наведении
        let that = this;
        toolTipElement.append(toolTipDiv);
        timeout = setTimeout(function () {
          displayTooltip(e, that);
        }, 400)
      });
      toolTipElement.addEventListener("mouseleave", function(e){       // затухание тултипа при ливе мыши
        clearTimeout(timeout)
        fadeOut(toolTipDiv)
      })
      toolTipElement.addEventListener("focus", function(e){            // появление тултипа при фокусе
        let that = this;
        toolTipElement.append(toolTipDiv);
        timeout = setTimeout(function () {
          displayTooltip(e, that);
        }, 400)
      });
      toolTipElement.addEventListener('blur', function(e){             // затухание тултипа при ливе фокуса
        clearTimeout(timeout)
        fadeOut(toolTipDiv)
      })
    }

    setUpToolTip()
  };
})

