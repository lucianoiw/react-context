import React, { Component } from 'react';

export const AppContext = React.createContext('app');

export function withAppContext(Component) {
    return function WrapperComponent(props) {
        return (
            <AppContext.Consumer>
                {state => <Component {...props} context={state} />}
            </AppContext.Consumer>
        );
    };
}

class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openPricingModal: true
    };

    this.onOpenPricingModal = this.onOpenPricingModal.bind(this);
  }

  onOpenPricingModal() {
    this.setState(prevState => ({ openPricingModal: !prevState.openPricingModal }));
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          onOpenPricingModal: this.onOpenPricingModal
        }}
      >
        [{this.state.openPricingModal ? 'Sim' : 'Nao'}]
        <button type="button" onClick={() => this.onOpenPricingModal()}>Change</button>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
