import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypedText() {

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to React!",
        "Learn to use Typed.js",
        "Integrate it with ease"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={typedElement}></span>
    </div>
  );
}

export default TypedText;
