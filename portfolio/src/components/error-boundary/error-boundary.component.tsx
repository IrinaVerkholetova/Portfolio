import React from "react";
import "./error-boundary.css";

interface Props {
  children?: React.ReactNode;
}

interface State {
  error: any;
  errorInfo: any;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  // public state: State = { error: null, errorInfo: null };
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  public componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
  }

  public render() {
    if (this.state.error) {
      <div className="errorBoundaryContainer" role="alert">
        <h2>Something went wrong ...</h2>
        <details style={{ whiteSpace: "pre-wrap" }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      </div>;
    }

    return this.props.children;
  }
}
