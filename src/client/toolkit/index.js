export const draggableConfig = {
  ww: 0,
  wh: 0,
  active: false,
  currentX: 0,
  currentY: 0,
  initialX: 0,
  initialY: 0,
  xOffset: 0,
  yOffset: 0,
  divProps: {},
  div: null,
  init: ref => init(ref),
  dragStart: e => dragStart(e),
  dragging: e => dragging(e),
  dragEnd: e => dragEnd(e),
  setTranslate3D: e => setTranslate3D(e)
}

const dragStart = (e) => {
  if (e.type === "touchstart") {
    draggableConfig.initialX = e.touches[0].clientX - draggableConfig.xOffset;
    draggableConfig.initialY = e.touches[0].clientY - draggableConfig.yOffset;
  } else {
    draggableConfig.initialX = e.clientX - draggableConfig.xOffset;
    draggableConfig.initialY = e.clientY - draggableConfig.yOffset;
  }

  draggableConfig.active = true;
}

const dragEnd = (e) => {
  draggableConfig.initialX = draggableConfig.currentX;
  draggableConfig.initialY = draggableConfig.currentY;
  draggableConfig.active = false;
}

const dragging = (e) => {
  if (draggableConfig.active) {

    e.preventDefault();

    if (e.type === "touchmove") {
      draggableConfig.currentX = e.touches[0].clientX - draggableConfig.initialX;
      draggableConfig.currentY = e.touches[0].clientY - draggableConfig.initialY;
    } else {
      draggableConfig.currentX = e.clientX - draggableConfig.initialX;
      draggableConfig.currentY = e.clientY - draggableConfig.initialY;
    }

    // set limitation area.
    if (draggableConfig.currentX < draggableConfig.divProps.width / 2 * -1) {
      draggableConfig.currentX = draggableConfig.divProps.width / 2 * -1;
    }

    if (draggableConfig.currentY < draggableConfig.divProps.height / 2 * -1) {
      draggableConfig.currentY = draggableConfig.divProps.height / 2 * -1;
    }

    if (draggableConfig.currentX > draggableConfig.ww - draggableConfig.divProps.width / 2) {
      draggableConfig.currentX = draggableConfig.ww - draggableConfig.divProps.width / 2;
    }

    if (draggableConfig.currentY > draggableConfig.wh - draggableConfig.divProps.height / 2) {
      draggableConfig.currentY = draggableConfig.wh - draggableConfig.divProps.height / 2;
    }

    draggableConfig.xOffset = draggableConfig.currentX;
    draggableConfig.yOffset = draggableConfig.currentY;

    setTranslate3D(draggableConfig.currentX, draggableConfig.currentY);
  }
}

const setTranslate3D = (xPosition, yPosition) => {
  draggableConfig.div.style.transform = "translate3d(" + xPosition + "px, " + yPosition + "px, 0)";
}

const init = (ref) => {
  draggableConfig.ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  draggableConfig.wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  draggableConfig.div = ref;
  draggableConfig.divProps = ref.getBoundingClientRect();
}