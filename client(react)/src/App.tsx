import React from "react";
import Currency from "./components/Currency";
import Checkout from "./containers/Checkout";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeContext } from "./context";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./containers/Header";
import LoginButtons from "./components/LoginButtons";
import CartButton from "./components/CartButton";

type State = {
  theme: "light" | "dark";
};
class App extends React.Component<{}, State> {
  state: State = { theme: "light" };
  render() {
    const { theme } = this.state;
    return (
      <BrowserRouter>
        <Header theme={theme}>
          <CartButton />
          <ThemeSwitch themeChange={(theme) => this.setState({ theme })} />
          <Currency theme={theme} />
          <LoginButtons />
        </Header>
        <ThemeContext.Provider value={theme}>
          <AppRouter />
        </ThemeContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
