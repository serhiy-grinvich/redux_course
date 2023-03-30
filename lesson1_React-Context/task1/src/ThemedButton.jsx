import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
  render() {
    const { fontColor, background } = this.context;
    // console.log(this.context);
    return (
      <button
        {...this.props}
        style={{ backgroundColor: background, color: fontColor }}
        className="btn"
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;
export default ThemedButton;
