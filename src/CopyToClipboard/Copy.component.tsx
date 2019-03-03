import * as React from 'react';

type Props = {
  /**
   * Pass the html event
   *
   * @default null
   */
  e: any | null;
  /**
   * Pass a callback
   *
   * @default nulll
   */
  cb: Function;
};

export const Copy: React.FunctionComponent<Props> = ({ e, cb }) => {
  console.log('this is e ', e);
  const newCopyText: string = e.target ? e.target.innerText : e.innerText || e;
  const textField = document.createElement('textarea');
  textField.innerText = newCopyText;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
  return cb() || null;
};
