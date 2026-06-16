import { useEffect, useRef } from 'react';

export default function DOMComment({ text }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const commentNode = document.createComment(` ${text} `);
      const parent = ref.current.parentNode;
      parent.insertBefore(commentNode, ref.current);

      return () => {
        if (commentNode.parentNode) {
          commentNode.parentNode.removeChild(commentNode);
        }
      };
    }
  }, [text]);

  return <span ref={ref} style={{ display: 'none' }} />;
}
