function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useRef, useState } from 'react';
import ErrorImage from "./images/error.png";
import styles from "./index.module.less";
import { DragPointDirection, DragSideDirection } from "./types";
import { handleMoveDragElement, hexToRgba } from "./utils";
/**
 * 裁剪
 */
var Tailor = function Tailor(_ref) {
  var src = _ref.src,
    _ref$filename = _ref.filename,
    filename = _ref$filename === void 0 ? '下载' : _ref$filename,
    onFinish = _ref.onFinish,
    _ref$isShowDownload = _ref.isShowDownload,
    isShowDownload = _ref$isShowDownload === void 0 ? true : _ref$isShowDownload,
    _ref$isShowReview = _ref.isShowReview,
    isShowReview = _ref$isShowReview === void 0 ? true : _ref$isShowReview,
    _ref$areaColor = _ref.areaColor,
    areaColor = _ref$areaColor === void 0 ? '#f00000' : _ref$areaColor,
    _ref$sideColor = _ref.sideColor,
    sideColor = _ref$sideColor === void 0 ? 'transparent' : _ref$sideColor,
    _ref$areaAlpha = _ref.areaAlpha,
    areaAlpha = _ref$areaAlpha === void 0 ? 0.25 : _ref$areaAlpha;
  var dragRef = useRef(null);
  var imageContainerRef = useRef(null);
  var canvasRef = useRef(null);
  var wrapRef = useRef(null);
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    base64URL = _useState2[0],
    setBase64URL = _useState2[1];
  var imgObject = useRef(new Image());
  var state = useRef({
    imageScale: 1
  });

  /**
   * 处理 image 图片报错
   */

  var handleImageError = function handleImageError() {
    setBase64URL(ErrorImage);
  };

  /**
   * 处理下载图片
   */
  var handleDownload = function handleDownload() {
    var a = document.createElement('a');
    // 设置图片名称
    a.download = filename + '.jpg';
    a.href = base64URL;
    a.click();
  };

  /**
   * 裁剪图片
   */
  var clipImage = function clipImage(left, top, dragWidth, dragHeight) {
    var imageElement = canvasRef.current;
    if (!imageElement) return;
    var ctx = state.current.canvasCtx;
    if (ctx) {
      var imagedata = ctx.getImageData(left, top, dragWidth, dragHeight);
      var _canvas = document.createElement('canvas');
      if (_canvas) {
        var _ctx = _canvas.getContext('2d');
        _canvas.width = imagedata.width;
        _canvas.height = imagedata.height;
        if (_ctx) {
          _ctx.putImageData(imagedata, 0, 0);
          setBase64URL(_canvas.toDataURL());
          onFinish === null || onFinish === void 0 ? void 0 : onFinish(_canvas.toDataURL());
        }
      }
    }
  };
  var createDragEvent = function createDragEvent(dragElement, canvasElement) {
    for (var _i2 = 0, _arr2 = Array.from(dragElement.children); _i2 < _arr2.length; _i2++) {
      var element = _arr2[_i2];
      handleMoveDragElement(element, dragElement, canvasElement, function () {
        var _canvasElement$getBou = canvasElement.getBoundingClientRect(),
          canvasLeft = _canvasElement$getBou.left,
          canvasTop = _canvasElement$getBou.top;
        var _dragElement$getBound = dragElement.getBoundingClientRect(),
          dragLeft = _dragElement$getBound.left,
          dragTop = _dragElement$getBound.top;
        clipImage(dragLeft - canvasLeft, dragTop - canvasTop, dragElement.clientWidth, dragElement.clientHeight);
      });
    }
  };
  /**
   * 初始化canvas
   */
  var initCanvas = function initCanvas() {
    return new Promise(function (resolve, reject) {
      var canvasElement = canvasRef.current;
      var wrapElement = wrapRef.current;
      if (canvasElement && wrapElement) {
        var ctx = canvasElement.getContext('2d');
        if (ctx) {
          state.current.canvasCtx = ctx;
          var image = new Image();
          image.src = src;
          var _wrapElement$getBound = wrapElement.getBoundingClientRect(),
            wrapWidth = _wrapElement$getBound.width,
            wrapHeight = _wrapElement$getBound.height;
          var wrapProportion = wrapWidth / wrapHeight;
          image.onload = function () {
            var imageWidth = image.width,
              imageHeight = image.height;
            var imageProportion = imageWidth / imageHeight;

            // 如果图片尺寸小于容器尺寸
            if (imageWidth <= wrapWidth && imageHeight <= wrapHeight) {
              state.current.imageScale = 1;
            } else if (imageProportion > wrapProportion) {
              state.current.imageScale = wrapWidth / imageWidth;
            } else {
              state.current.imageScale = wrapHeight / imageHeight;
            }
            var scaleImgWidth = state.current.imageScale * imageWidth;
            var scaleImgHeight = state.current.imageScale * imageHeight;
            canvasElement.width = scaleImgWidth;
            canvasElement.height = scaleImgHeight;
            ctx.drawImage(image, 0, 0, scaleImgWidth, scaleImgHeight);
            resolve(undefined);
          };
          image.onerror = function (error) {
            reject(error);
          };
        }
      }
    });
  };
  var handleDrag = function handleDrag(dragElement, canvasElement) {
    var curT = 0;
    var curL = 0;
    dragElement.addEventListener('mousedown', function (e) {
      e.stopPropagation();
      // 记录点击距离页面坐标
      var pageX = e.pageX;
      var pageY = e.pageY;
      // 记录左边和上边的距离
      var left = dragElement.offsetLeft;
      var top = dragElement.offsetTop;
      document.onmousemove = function (ev) {
        curT = ev.pageY - pageY + top;
        curL = ev.pageX - pageX + left;
        // 边界处理
        var minL = 0;
        var minT = 0;
        var maxL = canvasElement.clientWidth - dragElement.offsetWidth;
        var maxT = canvasElement.clientHeight - dragElement.offsetHeight;
        curL = curL < minL ? minL : curL > maxL ? maxL : curL;
        curT = curT < minT ? minT : curT > maxT ? maxT : curT;
        dragElement.style.left = curL + 'px';
        dragElement.style.top = curT + 'px';
      };
      document.onmouseup = function () {
        clipImage(curL, curT, dragElement.clientWidth, dragElement.clientHeight);
        document.onmousemove = null;
      };
    });
  };
  useEffect(function () {
    if (!dragRef.current) return;
    if (!wrapRef.current) return;
    if (!canvasRef.current) return;
    var initImage = function initImage() {
      var dragElement = dragRef.current;
      imgObject.current.src = src;
      imgObject.current.setAttribute('crossOrigin', 'Anonymous');
      imgObject.current.onload = function () {
        clipImage(0, 0, (dragElement === null || dragElement === void 0 ? void 0 : dragElement.clientWidth) || 0, (dragElement === null || dragElement === void 0 ? void 0 : dragElement.clientHeight) || 0);
      };
    };
    initCanvas().then(function () {
      // 初始化图片对象
      initImage();
      // 注册drag元素事件
      createDragEvent(dragRef.current, canvasRef.current);
    }).catch(function (err) {
      throw err;
    });
    handleDrag(dragRef.current, canvasRef.current);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: styles['container']
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['tail_area'],
    ref: wrapRef
  }, /*#__PURE__*/React.createElement("div", {
    className: styles['image_container'],
    ref: imageContainerRef
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef
  }), /*#__PURE__*/React.createElement("div", {
    className: styles['drag_crop'],
    ref: dragRef,
    style: {
      background: hexToRgba(areaColor, areaAlpha)
    }
  }, Object.keys(DragSideDirection).map(function (key) {
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      role: key,
      style: {
        background: sideColor
      },
      className: "".concat(styles['drag_crop_side'], " ").concat(styles['drag_crop_side_' + key])
    });
  }), Object.keys(DragPointDirection).map(function (key) {
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      role: key,
      className: "".concat(styles['drag_crop_point'], " ").concat(styles['drag_crop_point_' + key])
    });
  })))), (isShowReview || isShowDownload) && /*#__PURE__*/React.createElement("div", {
    className: styles['tail_result']
  }, isShowReview && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: styles['tail_result_img']
  }, /*#__PURE__*/React.createElement("img", {
    src: base64URL,
    alt: "",
    onError: handleImageError
  })), /*#__PURE__*/React.createElement("span", {
    className: styles['tail_result_text']
  }, "\u9884\u89C8")), isShowDownload && /*#__PURE__*/React.createElement("span", {
    className: styles['tail_result_link'],
    onClick: handleDownload
  }, "\u4E0B\u8F7D")));
};
export default Tailor;