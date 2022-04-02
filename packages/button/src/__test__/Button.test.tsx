import React, { MouseEvent } from 'react';
import { fireEvent, render } from '@testing-library/react';

import Button from '../Button';

const dataTestId = 'test-id';

describe('Button', () => {
  describe('Classes tests', () => {
    it('should set `size` class', () => {
      const size = 'middle';
      const { container } = render(<Button size={size} />);

      expect(container.firstElementChild).toHaveClass(size);
    });

    it('should set `variant` class', () => {
      const view = 'primary';
      const { container } = render(<Button variant={view} />);

      expect(container.firstElementChild).toHaveClass(view);
    });
  });

  describe('Callbacks tests', () => {
    it('should call `onClick` prop', () => {
      const cb = jest.fn();

      const { getByTestId } = render(
        <Button dataTestId={dataTestId} onClick={cb} />,
      );

      fireEvent.click(getByTestId(dataTestId));

      expect(cb).toBeCalledTimes(1);
    });

    it('should not call `onClick` prop if disabled', () => {
      const cb = jest.fn();

      const { getByTestId } = render(
        <Button dataTestId={dataTestId} disabled={true} onClick={cb} />,
      );

      fireEvent.click(getByTestId(dataTestId));

      expect(cb).not.toBeCalled();
    });

    it('target should contain button element', () => {
      const { getByTestId } = render(
        <Button dataTestId={dataTestId} onClick={cb} />,
      );

      const buttonNode = getByTestId(dataTestId);

      function cb(event: MouseEvent<HTMLButtonElement>) {
        expect(event.target).toBe(buttonNode);
      }

      fireEvent.click(buttonNode, { target: buttonNode });
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Button>Text</Button>);

    expect(unmount).not.toThrowError();
  });
});
