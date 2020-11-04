const getPosition = () => {
  console.log('getPosition');
}

const draw = (rgb) => {
  const tmpCtx = canvas.getContext("2d");

  tmpCtx.beginPath();
  tmpCtx.lineWidth = Math.random() * 5;
  tmpCtx.lineCap = 'round';

  tmpCtx.strokeStyle = `rgba(${rgbEnum.r}, ${rgbEnum.g}, ${rgbEnum.b}, 1)`;

  tmpCtx.moveTo(oldPos.x, oldPos.y);
  setOldPosition(e);
  tmpCtx.lineTo(oldPos.x, oldPos.y);

  tmpCtx.stroke();
}