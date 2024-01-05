import classes from './Skeleton.module.css';
import { useEffect, useRef, useState } from 'react';

export default function Skeleton({ width, verticalAlign }) {
  const skeleton = useRef();
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const parentElement = skeleton?.current?.parentElement;
    const parentStyles = getComputedStyle(parentElement);
    const parentLineHeight = parseInt(parentStyles.lineHeight);
    const parentFontSize = parseInt(parentStyles.fontSize);
    const newStyles = {
      height: parentFontSize + 'px',
      marginTop: (parentLineHeight - parentFontSize) / 2 + 'px',
      marginBottom: (parentLineHeight - parentFontSize) / 2 + 'px',
      width: width || '100px',
      verticalAlign: verticalAlign || 'inherit',
    };
    setStyles(() => newStyles);
  }, []);

  return (
    <span
      ref={skeleton}
      className={classes.skeleton}
      style={{ ...styles }}
    ></span>
  );
}
