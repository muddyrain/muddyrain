import { DragPointDirection, DragSideDirection } from "../types";
export var handleMoveDragElement = function handleMoveDragElement(element, dragElement, canvasElement, onMouseUp) {
  element.addEventListener('mousedown', function (e) {
    e.stopPropagation();
    // 记录鼠标的起始位置
    var startX = e.clientX;
    var startY = e.clientY;
    var startLeft = parseInt(dragElement.style.left) || 0;
    var startTop = parseInt(dragElement.style.top) || 0;
    var _dragElement$getBound = dragElement.getBoundingClientRect(),
      startWidth = _dragElement$getBound.width,
      startHeight = _dragElement$getBound.height;
    var _canvasElement$getBou = canvasElement.getBoundingClientRect(),
      canvasTop = _canvasElement$getBou.top,
      canvasLeft = _canvasElement$getBou.left,
      canvasWidth = _canvasElement$getBou.width,
      canvasHeight = _canvasElement$getBou.height;
    document.onmousemove = function (e) {
      var distanceX = e.clientX - startX;
      var distanceY = e.clientY - startY;
      switch (element.role) {
        // 右下角
        case DragPointDirection.br:
          {
            // 起始x轴位置 - 图形距离视口的left值 小于 图形的宽度
            if (e.clientX - canvasLeft < canvasWidth) {
              dragElement.style.width = startWidth + distanceX + 'px';
            } else {
              dragElement.style.width = canvasWidth - startLeft + 'px';
            }
            // 起始y轴位置 - 图形距离视口的top值 小于 图形的高度
            if (e.clientY - canvasTop < canvasHeight) {
              dragElement.style.height = startHeight + distanceY + 'px';
            } else {
              dragElement.style.height = canvasHeight - startTop + 'px';
            }
            break;
          }
        // 左下角
        case DragPointDirection.bl:
          {
            if (e.y - canvasTop < canvasHeight) {
              dragElement.style.height = startHeight + distanceY + 'px';
            } else {
              dragElement.style.height = canvasHeight - startTop + 'px';
            }
            // 记录鼠标的起始位置 和 移动的位置 大于 0
            if (startLeft + distanceX > 0) {
              // 记录鼠标的起始位置 和 移动的位置  小于 当前选中区最右侧的位置
              if (startLeft + distanceX < e.x - canvasLeft + startWidth - distanceX) {
                dragElement.style.left = startLeft + distanceX + 'px';
              }
              if (startWidth - distanceX < canvasElement.width) {
                dragElement.style.width = startWidth - distanceX + 'px';
              }
            } else {
              dragElement.style.left = 0 + 'px';
              dragElement.style.width = e.x - canvasLeft + startWidth - distanceX + 'px';
            }
            break;
          }
        // 左上角
        case DragPointDirection.tl:
          {
            if (e.clientX <= startWidth + startX) {
              if (startLeft + distanceX >= 0) {
                dragElement.style.width = startWidth - distanceX + 'px';
                dragElement.style.left = startLeft + distanceX + 'px';
              } else {
                dragElement.style.left = 0 + 'px';
                dragElement.style.width = e.x - canvasLeft + startWidth - distanceX + 'px';
              }
            }
            if (e.clientY <= startHeight + startY) {
              if (startTop + distanceY >= 0) {
                dragElement.style.height = startHeight - distanceY + 'px';
                dragElement.style.top = startTop + distanceY + 'px';
              } else {
                dragElement.style.top = 0 + 'px';
                dragElement.style.height = e.y - canvasTop + startHeight - distanceY + 'px';
              }
            }
            break;
          }
        case DragPointDirection.tr:
          {
            // 起始x轴位置 - 图形距离视口的left值 小于 图形的宽度
            if (e.x - canvasLeft < canvasWidth) {
              dragElement.style.width = startWidth + distanceX + 'px';
            } else {
              dragElement.style.width = canvasWidth - startLeft + 'px';
            }
            if (e.clientY <= startHeight + startY) {
              if (startTop + distanceY >= 0) {
                dragElement.style.height = startHeight - distanceY + 'px';
                dragElement.style.top = startTop + distanceY + 'px';
              } else {
                dragElement.style.top = 0 + 'px';
                dragElement.style.height = e.y - canvasTop + startHeight - distanceY + 'px';
              }
            }
            break;
          }
        case DragSideDirection.top:
          {
            if (e.clientY <= startHeight + startY) {
              if (startTop + distanceY >= 0) {
                dragElement.style.height = startHeight - distanceY + 'px';
                dragElement.style.top = startTop + distanceY + 'px';
              } else {
                dragElement.style.top = 0 + 'px';
                dragElement.style.height = e.clientY - canvasTop + startHeight - distanceY + 'px';
              }
            }
            break;
          }
        case DragSideDirection.bottom:
          {
            if (e.clientY < canvasTop + canvasHeight) {
              dragElement.style.height = startHeight + distanceY + 'px';
            } else {
              dragElement.style.height = canvasHeight - startTop + 'px';
            }
            break;
          }
        case DragSideDirection.right:
          {
            if (e.clientX < canvasLeft + canvasWidth) {
              dragElement.style.width = startWidth + distanceX + 'px';
            } else {
              dragElement.style.width = canvasWidth - startLeft + 'px';
            }
            break;
          }
        case DragSideDirection.left:
          {
            if (e.clientX <= startWidth + startX) {
              if (startLeft + distanceX >= 0) {
                dragElement.style.width = startWidth - distanceX + 'px';
                dragElement.style.left = startLeft + distanceX + 'px';
              } else {
                dragElement.style.left = 0 + 'px';
                dragElement.style.width = e.clientX - canvasLeft + startWidth - distanceX + 'px';
              }
            }
            break;
          }
        default:
          break;
      }
    };
    element.addEventListener('mouseup', function () {
      document.onmousemove = null;
      onMouseUp === null || onMouseUp === void 0 ? void 0 : onMouseUp();
    });
  });
};

/**
 * 判断是否为颜色
 * @param {string} strColor
 * @returns {boolean}
 */
function isValidColor(strColor) {
  var s = new Option().style;
  s.color = strColor;

  // return 'false' if color wasn't assigned
  return s.color === strColor.toLowerCase();
}

/**
 *
 * @param {string} hex  16进制颜色
 * @param {number} opacity   透明度
 * @returns rgba 颜色
 */
export function hexToRgba(_hex) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var hex = _hex;
  if (hex.slice(0, 1) !== '#') {
    throw "The starting character must be #";
  }
  if (hex.length === 3) {
    hex += '000';
  }
  if (isValidColor(hex)) {
    throw "".concat(hex, " is not a hex color.");
  }
  return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')';
}