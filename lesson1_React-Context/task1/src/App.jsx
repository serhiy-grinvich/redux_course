import React from 'react';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './theme-context';

class App extends React.Component {
  state = {
    theme: themes.ligth,
  };
  toggleTheme = () => {
    const newTheme = this.state.theme === themes.ligth ? themes.dark : themes.ligth;
    this.setState({ theme: newTheme });
  };
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;
